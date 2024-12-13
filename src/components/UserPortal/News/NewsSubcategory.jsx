import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../../ProfileContext/ProfileContext";

const NewsSubcategory = () => {
  const navigate = useNavigate()
  const { subcategoryId } = useParams(); // Get subcategory ID from the URL
  const [posts, setPosts] = useState([]);
  const [picture, setPicture] = useState(null);
  // const [error, setError] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const {userId, userToken} = useProfile()
  const [error, setError] = useState(null)
  const location = useLocation();
  const { categoryId, categoryName, subcategoryName } = location.state || {};
  const [newsData, setnewsData] = useState({
    users_id: userId,
    users_token: userToken,
    news_name: "",
    news_desc: "",
    news_image: '',
    cat_id: categoryId || "",
    subcat_id: subcategoryId || "",
  });
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [loading, setLoading] = useState(false); // For form submission state

  // Fetch posts for the subcategory on component mount
  // useEffect(() => {
  //   const apiUrl =
  //     process.env.NODE_ENV === "production"
  //       ? `https://ourservicestech.com.ng/farmmart_api/v2/posts/by_subcategory?id=${subcategoryId}`
  //       : `/farmmart_api/v2/posts/by_subcategory?id=${subcategoryId}`;

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setPosts(response.data.data); // Assuming API returns an array of posts
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching posts:", error);
  //     })
  //     .finally(() => {
  //       setLoadingPosts(false); // Stop loading spinner
  //     });
  // }, [subcategoryId]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setPicture(e.target.files[0]); // Store the selected file
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(picture)

    if (!picture) {
      setError("Please upload a picture.");
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // Step 1: Upload the image
      const uploadUrl = process.env.NODE_ENV === 'production'
          ? 'https://ourservicestech.com.ng/farmmart_api/v2/uploadimage'
          : '/farmmart_api/v2/uploadimage';

      const uploadData = new FormData();
      uploadData.append("upimg", picture);

      setnewsData((prevData) => ({
        ...prevData,
        news_image: picture.name,
      }));

      try{
        const uploadResponse = await axios.post(uploadUrl, uploadData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        console.log(uploadResponse.data); // Handle response
      }
      catch (error) {
        console.error("Error uploading image:", error.response?.data || error.message);
      }

      let updatednewsData = {
        ...newsData,
        news_image:picture.name,
      }

      // Step 2: Submit news Details    
      const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/news/create_news'
      : '/farmmart_api/v2/news/create_news'

      console.log(updatednewsData)
      
      try{
        const response = await axios.post (apiUrl, updatednewsData, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'charset':'UFT-8'
          }
        })
        console.log(response.data)
        navigate('/user/news')
      }catch(error){
        console.error("Error creating news:", error.response.data || error.message)
      }     

    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="subcategory-news">
      <h1 className="text-2xl font-bold mb-4">{subcategoryName} news</h1>
      <div className="subcategory-info mb-4">
        <p className="text-gray-600">Category: {categoryName}</p>
        <p className="text-gray-600">Subcategory ID: {subcategoryId}</p>
        <p className="text-gray-600">Category ID: {categoryId}</p>
      </div>

      {/* Create Post Section */}
      <div className="create-post mb-6">
        {!showForm && ( // Show button only if the form is not visible
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Create New Post
          </button>
        )}
      </div>

      {/* Create news Form */}
      {showForm && (
        <div className="create-news mb-8">
          <h2 className="text-xl font-semibold mb-2">Create News</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                name="news_name"
                value={newsData.news_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                placeholder="Enter news name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="news_desc"
                value={newsData.news_desc}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border h-96 rounded focus:ring focus:ring-blue-300"
                placeholder="Enter news description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Creating..." : "Create news"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)} // Cancel button to hide the form
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Display Posts */}
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        {loadingPosts ? (
          <div className="flex justify-center items-center">
            <p>Loading posts...</p>
          </div>
        ) : posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div
                key={post.id}
                className="post-item border-b py-4 px-2 mb-4 rounded shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.content}</p>
                <button
                  onClick={() => alert(`Navigate to post detail with ID: ${post.id}`)}
                  className="text-blue-500 hover:underline mt-2"
                >
                  View Comments
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available for this subcategory.</p>
        )}
      </div> */}
    </div>
  );
};

export default NewsSubcategory;
