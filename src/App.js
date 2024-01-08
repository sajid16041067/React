import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import Header from "./components/Header";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Toast from "./components/Toast";
import ViewBlog from "./components/ViewBlog";

export const ToastContext = createContext();
function App() {
  const [toastInfo, setToastInfo] = useState({
    type: "",
    msg: "",
    show: false,
  });


  const setToast = ({ type, msg, show }) => {
    setToastInfo({ type, msg, show });
  };
  return (
    <ToastContext.Provider value={{ toastInfo, setToast }}>
      
      <BrowserRouter>
        <Toast />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<AddBlog />} />
          <Route path="/view/:id" element={<ViewBlog />} />
          <Route path="/update/:id" element={<AddBlog />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ToastContext.Provider>
  );
}

export default App;
