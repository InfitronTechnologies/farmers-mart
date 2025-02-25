import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useProfile } from "../../ProfileContext/ProfileContext";
import axios from "axios";

const ForumData = () => {
  const { forumId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { forumName, forumCategory, forumSubCategory, forumDescription, forumOwner } = location.state || {};
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentForm, setCommentForm] = useState(false);
  const [allComments, setAllComments] = useState([])
  
  const { userId, userToken } = useProfile();

  const [forumComment, setForumComment] = useState({
    users_id: userId,
    users_token: userToken,
    forum_id: forumId,
    user_msg: ''
  });

  useEffect(() => {
    setLoading(true);
    setError(null);

    const handleAllComments = async () => {
        const url  = `${import.meta.env.VITE_API_BASE_URL}/forum_data/select_by_forum_id?id=${forumId}`
      
        try {
            const response = await axios.get(url);
            if (response.data) {
                setAllComments(response.data.data)
            }
        }  catch (err) {
            setError("Failed to fetch forums. Please try again later.");
            console.error(err);
        } finally {
            setLoading(false);
        }           
    }
    handleAllComments()
  }, [])

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setForumComment({
      ...forumComment,
      user_msg: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate user authentication
    if (!userId || !userToken) {
      setError("You must be logged in to comment");
      return;
    }

    // Validate comment
    if (!forumComment.user_msg.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    const commentUrl = `${import.meta.env.VITE_API_BASE_URL}/forum_data/create_forum_data`

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(commentUrl, {
        ...forumComment,
        users_id: userId,
        users_token: userToken
      });
            
      // Reset form after successful submission
      setForumComment({
        users_id: userId,
        users_token: userToken,
        forum_id: forumId,
        user_msg: ''
      });
      setCommentForm(false);
    } catch (error) {
      setError(error.response?.data?.message || error.message || "An error occurred");
      console.error("Error creating forum comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{forumName}</h1>
          <button
            onClick={handleBackClick}
            className="text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>

        {/* Forum Info Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-medium">Category:</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {forumCategory}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-medium">Subcategory:</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {forumSubCategory}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-medium">Created By:</span>
            <span className="text-gray-800 font-semibold">{forumOwner}</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {forumDescription}
          </p>
        </div>

        {/* Actions Section */}
        <div className="mt-8 flex justify-end space-x-4">
          {!commentForm && (
            <button 
              onClick={() => setCommentForm(true)}
              className="text-sm text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
              Comment
            </button>
          )}
          
          <button className="text-sm text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
            Report
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-100 text-red-800 p-3 rounded-lg">
            {error}
          </div>
        )}

        {commentForm && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Leave a Comment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                name="user_msg"
                value={forumComment.user_msg}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your comment here..."
                required
              ></textarea>
              <button
                type="submit"
                className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Comment"}
              </button>
            </form>
          </div>
        )}

        <div>
            <h3 className="text-xl font-bold mb-4">Comments</h3>
            {allComments.length > 0 ? (
                <ul className="space-y-4">
                {allComments.slice().reverse().map((comment, index) => ( //.slice.reverse to show latest comment first
                    <li key={index} className="p-4 border rounded shadow">
                        <p className="text-lg font-semibold"> By: {comment.user_forum}</p>
                        <p>{comment.user_msg}</p>
                        <p className="text-gray-500 text-sm">
                            Posted: {comment.created_date} {comment.created_time}
                        </p>
                    </li>
                ))}
                </ul>
            ) : (
                <p>No Comments available.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ForumData;