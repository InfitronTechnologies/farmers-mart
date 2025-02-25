import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Forums = () => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      setLoading(true);
      setError(null);
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/forum/list_last10_forum`

      try {
        try {
          const response = await axios.get(apiUrl);
          if (response.data) {
            setForums(response.data.data); // Assuming forum data is in `data`
          }
        } catch (err) {
          console.warn(`Forum with ID not found or error occurred`);
        }
      } catch (err) {
        setError("Failed to fetch forums. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForums();
  }, []);


  if (loading) return <p>Loading forums...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Forums</h1>
      {forums.length > 0 ? (
        <ul className="space-y-4">
          {forums.map((forum, index) => (
            <Link
              key={forum.id}
              to={`/user/forums/${forum.id}`}
              state={{
                forumId: forum.id,
                forumName: forum.forum_name,
                forumCategory: forum.category,
                forumSubCategory: forum.sub_category,
                forumDescription: forum.forum_desc,
                forumOwner: forum.forum_user
              }}
            >
              <li key={forum.id} className="p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">{forum.forum_name}</h2>
                <p>{forum.forum_desc}</p>
                <p>Category: {forum.category}, Subcategory:{forum.subcategory}</p>
                <p className="text-gray-500 text-sm">
                  Created by: {forum.forum_user}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No forums available.</p>
      )}
    </div>
  );
};

export default Forums;
