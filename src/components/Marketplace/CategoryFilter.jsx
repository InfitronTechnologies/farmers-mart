import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';

const CategoryFilter = ({ setFilteredProducts, setCategoryName, setSubcategories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = process.env.NODE_ENV === 'production'
    ? 'https://ourservicestech.com.ng/farmmart_api/v2/category/list_all_category'
    : '/farmmart_api/v2/category/list_all_category'

    const ShowCategories = async () => {
      try {
        const response = await axios.get(url);
        setCategories(response.data?.data || []);
      } catch (error) {
        console.error("Category Error:", error);
      } finally {
        setLoading(false);
      }
    };
    ShowCategories();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])

  const handleCategoryChange = async (name, id) => {
    setSelectedCategory(id);
    // Implement the logic to filter products by category here
    const url = process.env.NODE_ENV === 'production'
    ? `https://ourservicestech.com.ng/farmmart_api/v2/product/select_by_cat_id_get_product?id=${id}`
    : `/farmmart_api/v2/product/select_by_cat_id_get_product?id=${id}`

    try{  
      const response = await axios.get(url)
      setFilteredProducts(response.data.data)
      setCategoryName(name)
    } catch (error) {
      console.error("Category Error:", error)
    }

  // Fetch subcategories when a category is selected
  const fetchSubcategories = () => {
    // setLoadingSubcategories(true);
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? `https://ourservicestech.com.ng/farmmart_api/v2/subcategory/select_by_cat_subcat?id=${id}`
        : `/farmmart_api/v2/subcategory/select_by_cat_subcat?id=${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setSubcategories(response.data.data || []); // Reset if no subcategories are returned
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      })
      .finally(() => {
        // setLoadingSubcategories(false);
      });
    };
    fetchSubcategories()
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <Loading isLoading={isLoading} />
      {loading ? (
        <p>Loading categories...</p>
      ) : categories.length === 0 ? (
        <p>No product yet, check back later</p>
      ) : (
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.category_name, category.id)}
              className={`px-4 py-2 w-full text-left ${
                selectedCategory === category.id ? 'bg-farmersmartGreen text-white' : ''
              } rounded hover:bg-farmersmartDarkGreen hover:text-white`}
            >
              {category.category_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
