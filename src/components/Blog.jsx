import React from "react";
import { Link } from "react-router-dom";

export default function Blog({ blog }) {
  const { blogTitle, blogId, blogPublishedOn } = blog;

  return (
    <div className="border my-4">
      <div className="row py-3 px-4 border-bottom">
        <div className="col-10">
          <h4>
            {blogTitle.length > 60
              ? blogTitle.slice(0, 60) + "...."
              : blogTitle}
          </h4>
          <em className="text-muted">
            Published on- {blogPublishedOn}
          </em>
        </div>
        <div className="col-2 d-flex justify-content-end align-items-top">
          <Link to={`/view/${blogId}`}>
            <button
              className="btn btn-primary"
              style={{ height: "max-content" }}
            >
              View Blog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
