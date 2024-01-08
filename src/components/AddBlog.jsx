import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContext } from "../App";
import { categories } from "../content";
import { addBlog, updateBlog } from "../reducers/BlogReducers";

export default function AddBlog() {
  const blogs = useSelector((state) => state.blogs.blogs);
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { setToast } = useContext(ToastContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      const blogToSet = blogs.find((blog) => blog.blogId === params.id);
      setBlog(blogToSet);
      setTitle(blogToSet.blogTitle);
      setCategory(blogToSet.blogCategory);
      setContent(blogToSet.blogText);
      console.log("Ho rha kuch");
    }
  }, [blogs, params.id]);

  const onUpdate = () => {
    const newErrors = {};
    if (title === "") {
      newErrors.titleError = "Please enter blog title!";
    }
    if (category === "") {
      newErrors.categoryError = "Please select a blog category!";
    }
    if (content === "") {
      newErrors.contentError = "Please write some blog content!";
    }
    if (!(Object.keys(newErrors).length === 0)) {
      setErrors(newErrors);
    } else {
      const updatedBlog = {
        blogTitle: title,
        blogCategory: category,
        blogText: content,
        blogLiked: blog.blogLiked,
        blogId: params.id,
      };
      dispatch(updateBlog({ blog: updatedBlog }));
      setToast({
        type: "success",
        msg: "Blog updated successfully!",
        show: true,
      });
      navigate("/");
    }
  };

  const onAddCancel = () => {
    navigate("/");
  };

  const onEditCancel = () => {
    navigate(`/view/${params.id}`);
  };

  const onSubmit = () => {
    let newErrors = {};
    if (title === "") {
      newErrors.titleError = "Please enter blog title!";
    }
    if (category === "") {
      newErrors.categoryError = "Please select a blog category!";
    }
    if (content === "") {
      newErrors.contentError = "Please write some blog content!";
    }
    if (!(Object.keys(newErrors).length === 0)) {
      setErrors(newErrors);
    } else {
      const newBlog = {
        blogTitle: title,
        blogCategory: category,
        blogText: content,
        blogLiked: false,
      };
      dispatch(addBlog({ blog: newBlog }));
      setToast({
        type: "success",
        msg: "Blog added successfully!",
        show: true,
      });
      navigate("/");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="main w-75">
        <div className="heading">
          <h2 className="text-center display-5 py-4 text-white">
            Write New Blog
          </h2>
        </div>
        <div className="blog-form p-4">
          <div className="blog-title form-group my-3">
            <label htmlFor="title" className="mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="text-danger">
              {errors.titleError ? errors.titleError : ""}
            </span>
          </div>
          <div className="blog-category form-group my-3">
            <label htmlFor="category" className="mb-1">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <span className="text-danger">
              {errors.categoryError ? errors.categoryError : ""}
            </span>
          </div>
          <div className="blog-title form-group my-3">
            <label htmlFor="content" className="mb-1">
              Content
            </label>
            <textarea
              type="text"
              id="content"
              rows={8}
              className="form-control"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <span className="text-danger">
              {errors.contentError ? errors.contentError : ""}
            </span>
          </div>
          <div className="submit-btn  my-3">
            {!params.id && (
              <button className="btn btn-primary" onClick={onSubmit}>
                Submit
              </button>
            )}
            {params.id && (
              <button className="btn btn-primary" onClick={onUpdate}>
                Update
              </button>
            )}
            {!params.id && (
              <button className="btn btn-secondary mx-3" onClick={onAddCancel}>
                Cancel
              </button>
            )}
            {params.id && (
              <button className="btn btn-secondary mx-3" onClick={onEditCancel}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
