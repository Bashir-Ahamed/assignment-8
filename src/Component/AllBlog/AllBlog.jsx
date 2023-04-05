import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";

const AllBlog = () => {
  const [loadBlogs, setLoadBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLoadBlogs(data));
  }, []);
  const notify = () => toast("You Have Already Bookmarked This Blog!");

  const [name, setName] = useState([]);
  const AddBookmark = (blog) => {
    const bookmarkedAdd = name.find((n) => n.id === blog.id);
    if (bookmarkedAdd) {
      notify();
      const newTitle = [...name, blog];
      setName(newTitle);
    } else {
      const newTitle = [...name, blog];
      setName(newTitle);
    }
  };
  const [Time, setTime] = useState(0);

  const ReadTime = (time) => {
    if (time) {
      const setTimezone = time + Time;
      setTime(setTimezone);
    } else {
      setTime(Time);
    }
  };

  return (
    <div className="row">
      <div className="col-md-8">
        {loadBlogs.map((blogs) => (
          <Blog
            blogs={blogs}
            AddBookmark={AddBookmark}
            ReadTime={ReadTime}
          ></Blog>
        ))}
      </div>
      <div className="col-md-4">
        <p className="card p-2 fs-3">Spent time on read : {Time} min</p>
        <p className="card p-2 fs-3">Bookmarked Blogs :{name.length}</p>
        {name.map((bookmark) => (
          <Sidebar bookmark={bookmark}></Sidebar>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
