import React, { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, likeBlog } from "../reducers/BlogReducers";
import { ToastContext } from "../App";

export default function ViewBlog() {
  const blogs = useSelector((state) => state.blogs.blogs);
  const params = useParams();
  const [blog, setBlog] = useState({ blogLiked: false });
  const [isLiked, setIsLiked] = useState(blog.blogLiked);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setToast } = useContext(ToastContext);

  const onLike = () => {
    if (!isLiked) {
      dispatch(likeBlog({ blogId: blog.blogId }));
      setIsLiked(!isLiked);
    } else {
      dispatch(likeBlog({ blogId: blog.blogId }));
      setIsLiked(!isLiked);
    }
  };

  const handleDelete = (blogId) => {
    dispatch(deleteBlog({ blogId }));
    setToast({ type: "success", msg: "Blog deleted", show: true });
    navigate("/");
  };

  useEffect(() => {
    const blogToSet = blogs.find((blog) => blog.blogId == params.id);
    setBlog(blogToSet);
    setIsLiked(blogToSet.blogLiked);
  }, [blogs]);

  return (
    <div>
      <div className="title py-4 text-white">
        <h2 className="text-center display-5">View Blog</h2>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="border my-4 w-50 container-blog p-4">
          <div className="row py-3 px-4 border-bottom">
            <div className="col-12">
              <h4>{blog.blogTitle}</h4>
            </div>
          </div>
          <div>
            <p className="py-3 px-4">{blog.blogText}</p>
          </div>
          <div className="py-3 px-4 d-flex justify-content-between border-top">
            <div
              className="likes border-right d-flex justify-content-center mx-4 align-items-center"
              style={{ cursor: "pointer" }}
              onClick={onLike}
            >
              <AiFillLike color={isLiked ? "blue" : ""} size={"26px"} />
            </div>
            <div className="d-flex">
              <div className="comments border-right-0 d-flex justify-content-center align-items-center mx-3">
                <Link to={`/update/${blog.blogId}`}>
                  <button className="btn btn-warning">
                    <TbEditCircle /> Edit
                  </button>
                </Link>
              </div>
              <div className="share d-flex justify-content-center align-items-center">
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(blog.blogId)}
                >
                  <MdDelete /> Delete
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
