import React from "react";

const Sidebar = ({ bookmark }) => {
  return <div className="card p-2 shadow mt-3">{bookmark.blog_title}</div>;
};

export default Sidebar;
