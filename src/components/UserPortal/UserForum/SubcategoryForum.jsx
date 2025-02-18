import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../../ProfileContext/ProfileContext";

const SubcategoryForum = () => {
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
  const [forumData, setForumData] = useState({
    users_id: userId,
    users_token: userToken,
    forum_name: "",
    forum_desc: "",
    forum_image: '',
    cat_id: categoryId || "",
    subcat_id: subcategoryId || "",
  });
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [loading, setLoading] = useState(false); // For form submission state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForumData((prevData) => ({
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
      const uploadUrl = `${import.meta.env.VITE_API_BASE_URL}/uploadimage`

      const uploadData = new FormData();
      uploadData.append("upimg", picture);

      setForumData((prevData) => ({
        ...prevData,
        forum_image: picture.name,
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

      let updatedForumData = {
        ...forumData,
        forum_image:picture.name,
      }

      // Step 2: Submit Forum Details    
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/forum/create_forum`

      console.log(updatedForumData)
      
      try{
        const response = await axios.post (apiUrl, updatedForumData, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'charset':'UFT-8'
          }
        })
        console.log(response.data)
        navigate('/user/forums')
      }catch(error){
        console.error("Error creating forum:", error.response.data || error.message)
      }     

    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="subcategory-forum">
      <h1 className="text-2xl font-bold mb-4">{subcategoryName} Forum</h1>
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

      {/* Create Forum Form */}
      {showForm && (
        <div className="create-forum mb-8">
          <h2 className="text-xl font-semibold mb-2">Create a New Forum</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Forum Name</label>
              <input
                type="text"
                name="forum_name"
                value={forumData.forum_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
                placeholder="Enter forum name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Forum Description</label>
              <textarea
                name="forum_desc"
                value={forumData.forum_desc}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border h-96 rounded focus:ring focus:ring-blue-300"
                placeholder="Enter forum description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium">Forum Image</label>
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
                {loading ? "Creating..." : "Create Forum"}
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

export default SubcategoryForum;
