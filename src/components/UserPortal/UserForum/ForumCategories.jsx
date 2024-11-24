import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";

const ForumCategories = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingSubcategories, setLoadingSubcategories] = useState(false);
  const [forumData, setForumData] = useState({
    categoryId: "",
    categoryName: "",
    subcategoryId: "",
    subcategoryName: "",
  });

  // Fetch all categories on component mount
  useEffect(() => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://ourservicestech.com.ng/farmmart_api/v2/category/list_all_category"
        : "/farmmart_api/v2/category/list_all_category";

    axios
      .get(apiUrl)
      .then((response) => {
        setCategories(response.data.data); // Assuming API returns an array of categories
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Fetch subcategories when a category is selected
  const fetchSubcategories = (categoryId) => {
    setLoadingSubcategories(true);
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? `https://ourservicestech.com.ng/farmmart_api/v2/subcategory/select_by_cat_subcat?id=${categoryId}`
        : `/farmmart_api/v2/subcategory/select_by_cat_subcat?id=${categoryId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setSubcategories(response.data.data || []); // Reset if no subcategories are returned
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      })
      .finally(() => {
        setLoadingSubcategories(false);
      });
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setForumData((data) => ({
      ...data,
      categoryId: category.id,
      categoryName: category.category_name,
    }));
    setSelectedCategory(category);
    fetchSubcategories(category.id);
  };

  // Handle subcategory click
  const handleSubcategoryClick = (subcategory) => {
    setForumData((data) => ({
      ...data,
      subcategoryId: subcategory.id,
      subcategoryName: subcategory.sub_category_name,
    }));
  };

  return (
    <div className="forum-categories">
      <h1 className="text-xl font-bold mb-4">Forum Categories</h1>

      <div>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Dropdown
              key={category.id}
              arrowIcon={false}
              inline
              label={
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="category-btn px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                >
                  {category.category_name}
                </button>
              }
            >
              {selectedCategory && selectedCategory.id === category.id && (
                <div>
                  {loadingSubcategories ? (
                    <div className="flex justify-center items-center py-2">
                      <Spinner color="blue" size="sm" />
                      <p className="ml-2 text-sm text-gray-500">Loading...</p>
                    </div>
                  ) : subcategories.length > 0 ? (
                    subcategories.map((subcategory) => (
                      <Dropdown.Item key={subcategory.id}>
                        <Link
                          to={`/user/forum/${subcategory.id}`}
                          state={{
                            categoryId: forumData.categoryId,
                            categoryName: forumData.categoryName,
                            subcategoryId: subcategory.id,
                            subcategoryName: subcategory.sub_category_name,
                          }}
                          onClick={() => handleSubcategoryClick(subcategory)}
                          className="subcategory-btn px-4 py-2 rounded hover:bg-gray-100 w-full text-left"
                        >
                          {subcategory.sub_category_name}
                        </Link>
                      </Dropdown.Item>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 px-4 py-2">
                      No subcategories available.
                    </p>
                  )}
                </div>
              )}
            </Dropdown>
          ))
        ) : (
          <p className="text-gray-500">Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default ForumCategories;
