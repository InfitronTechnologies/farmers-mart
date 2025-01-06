import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProfile } from '../../ProfileContext/ProfileContext';
import axios from 'axios';
import KycModal from '../KycModal/KycModal';

function PartnerProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const farmId = location.state?.farmId;
  const {userId, userToken, partnerId, kycLevel} = useProfile()
  const [categories, setCategories] = useState([])
  const [productType, setProductType] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isKycModalOpen, setIsKycModalOpen] = useState(false);
  const [pictures, setPictures] = useState({
    front: null,
    left: null,
    right: null,
  });

  const [newProduct, setNewProduct] = useState({
    users_id: userId,
    users_token: userToken,
    partner_id: partnerId,
    product_type_id: "",
    category_id: "",
    sub_category_id:"",
    product_name: "",
    product_short_desc: "",
    product_long_desc: "",
    product_normal_price: "",
    product_promo_price: "",
    units: "",
    min_qty: "",
    max_qty: "",
    product_weight: "",
    product_image_f: "",
    product_image_l:  "",
    product_image_r: "",
  });

  //KYC MODAL CONTROL
  const handleOpenModal = () => {
    setIsKycModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsKycModalOpen(false);
  };

  useEffect(() => {
    const fetchProductType = async () => {
      const url = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/list_all_product_type'
      : '/farmmart_api/v2/list_all_product_type'

      try {
        const response = await axios.get(url);
        setProductType(response.data.data); 
      } catch (error) {
        console.error("Error fetching product type", error);
      }
    };
    fetchProductType()

    const fetchCategories = async () => {
      const categoriesUrl = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/category/list_all_category'
      : '/farmmart_api/v2/category/list_all_category'

      try {
        const response = await axios.get(categoriesUrl);
        setCategories(response.data.data); 
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  },[]);

  // Fetch Subcategories when categories changes
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (newProduct.category_id) {
        const subcategoriesUrl =
          process.env.NODE_ENV === "production"
            ? `https://ourservicestech.com.ng/farmmart_api/v2/subcategory/select_by_cat_subcat?id=${newProduct.category_id}`
            : `/farmmart_api/v2/subcategory/select_by_cat_subcat?id=${newProduct.category_id}`;
  
        try {
          const response = await axios.get(subcategoriesUrl);
          setSubcategories(response.data.data);
          // console.log(response.data.data);
        } catch (error) {
          console.error("Error fetching Subcategories:", error);
        }
      }
    };
  
    fetchSubcategories();
  }, [newProduct.category_id]); // Trigger this effect whenever category_id changes
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = (e, position) => {
    const file = e.target.files[0]; // Get the selected file
  
    setPictures((prevState) => ({
      ...prevState,
      [position]: file, // Update the specific position (front, left, right)
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (kycLevel<3) {
      handleOpenModal()//Open the modal
    }else{
      if (!pictures.front || !pictures.left || !pictures.right) {
        setError("Please upload all required pictures (Front, Left, and Right).");
        return;
      }else{
        setNewProduct({
          ...newProduct,
          product_image_f: pictures.front.name,
          product_image_l: pictures.left.name,
          product_image_r: pictures.right.name
        })
      }

      setLoading(true);
      setError(null); // Clear previous errors

      try {
        // 1. Upload Images
        const uploadUrl = process.env.NODE_ENV === "production" 
        ? "https://ourservicestech.com.ng/farmmart_api/v2/uploadimage" 
        : "/farmmart_api/v2/uploadimage";
    
        const uploadData = new FormData();        
          uploadData.append("pf_img", pictures.front); // Front image
          uploadData.append("pl_img", pictures.left);   // Left image
          uploadData.append("pr_img", pictures.right); // Right image


          try {
            const response = await axios.post(uploadUrl, uploadData)
            console.log(response.data)
          } catch (error) {
            console.error("Error uploading image:", error.response?.data || error.message);
          }
          

          const updatedProduct = {
            ...newProduct,
            product_image_f: pictures.front.name,
            product_image_l: pictures.left.name,
            product_image_r: pictures.right.name
          };
    

        // 2. Create the Product
        const createProductUrl = process.env.NODE_ENV === "production"
        ? "https://ourservicestech.com.ng/farmmart_api/v2/product/create_partner_product"
        : "/farmmart_api/v2/product/create_partner_product";

        console.log(updatedProduct)
        const response = await axios.post(createProductUrl, updatedProduct);
        console.log(response.data)
      } catch (err) {
        console.error(err);
        setError(err.message || 'Something went wrong. Please try again.')
      }finally{
        setLoading(false)
      }
    }
  };
  

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/** Product Information **/}
          <div>
            <label className="block mb-1 font-medium">Product Type</label>
            <select
                className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                focus:outline-none focus:ring-0 focus:border-2"
                name="product_type_id"
                value={newProduct.product_type_id}
                onChange={(e) => setNewProduct({ ...newProduct, product_type_id: e.target.value })}
                required
              >
                <option value="">Select product type</option>
                {productType.map((product) => (
                <option key={product.id} value={product.id}>{product.product_type_name}</option>
                ))}
              </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Category</label>
              <select
                className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                focus:outline-none focus:ring-0 focus:border-2"
                name="category_id"
                value={newProduct.category_id}
                onChange={(e) => setNewProduct({ ...newProduct, category_id: e.target.value })}
                required
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.category_name}</option>
                ))}
              </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Sub-Category</label>
            <select
              className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
              focus:outline-none focus:ring-0 focus:border-2"
              name="sub_category_id"
              value={newProduct.sub_category_id}
              onChange={(e) => setNewProduct({ ...newProduct, sub_category_id: e.target.value })}
              required
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>{subcategory.sub_category_name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input 
              type="text" 
              name="product_name"
              value={newProduct.product_name}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Short Description</label>
            <textarea 
              name="product_short_desc"
              value={newProduct.product_short_desc}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Short Description"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Long Description</label>
            <textarea 
              name="product_long_desc"
              value={newProduct.product_long_desc}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Long Description"
            ></textarea>
          </div>

          {/** Pricing and Quantity **/}
          <div>
            <label className="block mb-1 font-medium">Normal Price (NGN) </label>
            <input 
              type="number" 
              name="product_normal_price"
              value={newProduct.product_normal_price}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Normal Price"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Promo Price (NGN)</label>
            <input 
              type="number" 
              name="product_promo_price"
              value={newProduct.product_promo_price}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Promo Price"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Units</label>
            <input 
              type="text" 
              name="units"
              value={newProduct.units}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Units"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Minimum Quantity</label>
            <input 
              type="number" 
              name="min_qty"
              value={newProduct.min_qty}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Minimum Quantity"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Maximum Quantity</label>
            <input 
              type="number" 
              name="max_qty"
              value={newProduct.max_qty}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Maximum Quantity"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Product Weight</label>
            <input 
              type="text" 
              name="product_weight"
              value={newProduct.product_weight}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
              placeholder="Enter Product Weight"
            />
          </div>

          {/** Product Images **/}
          <div>
            <label className="mb-1 font-medium">Front Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "front")}
              required
              className="file-input border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="mb-1 font-medium">Left Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "left")}
              required
              className="file-input border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="mb-1 font-medium">Right Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "right")}
              required
              className="file-input border rounded px-3 py-2"
            />
          </div>
          <div className="text-center w-100 mt-6">
            <button 
              type='submit'
              disabled={loading}
              className={`submit-btn px-4 py-2 rounded bg-blue-500 text-white ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {loading ? 'Creating...' : 'Create Product'}
            </button>
          </div>
        </form>
        <KycModal isOpen={isKycModalOpen} onClose={handleCloseModal} />      
    </div>
  );
}

export default PartnerProduct;