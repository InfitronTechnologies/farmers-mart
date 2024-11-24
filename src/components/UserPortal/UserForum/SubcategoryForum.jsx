import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const SubcategoryForum = () => {
  const { subcategoryId } = useParams(); // Get subcategory ID from the URL
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const location = useLocation();
  const { categoryId, categoryName, subcategoryName } = location.state || {};

  const [forumData, setForumData] = useState({
    users_id: "", // Replace with actual user ID
    users_token: "", // Replace with actual user token
    forum_name: "",
    forum_desc: "",
    forum_image: null, // Change to hold a file
    cat_id: categoryId || "",
    subcat_id: subcategoryId || "",
  });

  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [loadingCreate, setLoadingCreate] = useState(false); // For form submission state

  // Fetch posts for the subcategory on component mount
  useEffect(() => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? `https://ourservicestech.com.ng/farmmart_api/v2/posts/by_subcategory?id=${subcategoryId}`
        : `/farmmart_api/v2/posts/by_subcategory?id=${subcategoryId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setPosts(response.data.data); // Assuming API returns an array of posts
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => {
        setLoadingPosts(false); // Stop loading spinner
      });
  }, [subcategoryId]);

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
    const file = e.target.files[0];
    setForumData((prevData) => ({
      ...prevData,
      forum_image: file, // Set the file in state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingCreate(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("users_id", forumData.users_id);
    formData.append("users_token", forumData.users_token);
    formData.append("forum_name", forumData.forum_name);
    formData.append("forum_desc", forumData.forum_desc);
    formData.append("cat_id", forumData.cat_id);
    formData.append("subcat_id", forumData.subcat_id);

    if (forumData.forum_image) {
      formData.append("forum_image", forumData.forum_image); // Add the image file
    }

    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://ourservicestech.com.ng/farmmart_api/v2/forum/create_forum"
        : "/farmmart_api/v2/forum/create_forum";

    axios
      .post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert("Forum created successfully!");
          // Optionally refresh posts or handle post creation logic
          setShowForm(false); // Hide the form after successful creation
        } else {
          alert("Failed to create forum. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error creating forum:", error);
        alert("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoadingCreate(false);
      });
  };

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
                className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-300"
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
                disabled={loadingCreate}
                className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ${
                  loadingCreate ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loadingCreate ? "Creating..." : "Create Forum"}
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
      <div>
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
      </div>
    </div>
  );
};

export default SubcategoryForum;
