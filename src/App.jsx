import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import AllBlog from "./Component/AllBlog/AllBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QA from "./Component/QA/QA";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <AllBlog></AllBlog>
      <QA></QA>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
