import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blogs, AddBookmark, ReadTime }) => {
  return (
    <div className="mt-3 p-0 w-100">
      <img
        className="card-img-top img-fluid rounded-top"
        src={blogs.cover_image}
        alt=" Cover Image"
      />
      <div className="card-body mt-3 p-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <div>
              <img
                src={blogs.author_image}
                alt="Author Image"
                height="60"
                width="60"
                className="rounded-circle"
              />
            </div>
            <div className="ms-2">
              <small className="fw-bold fs-5"> {blogs.author_name}</small>{" "}
              <br />
              <small className="text-muted fs-6"> {blogs.publish_date}</small>
            </div>
          </div>
          <div className="d-md-flex">
            <small className="text-muted  fs-6 me-3 ">
              {blogs.read_time}min read
            </small>
            <p
              className="bookmark-btn"
              onClick={() => {
                AddBookmark(blogs);
              }}
            >
              <FontAwesomeIcon icon={faBookmark} />
            </p>
          </div>
        </div>
        <h5 className="card-title text-start mt-4 fs-4">{blogs.blogs_title}</h5>
        <div className="row">
          <div className="col text-start">
            <p className="card-text text-muted fs-6 ">
              {" "}
              {blogs.tags.map((tag) => (
                <small>{tag}</small>
              ))}{" "}
            </p>
            <button
              onClick={() => {
                ReadTime(blogs.read_time);
              }}
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
