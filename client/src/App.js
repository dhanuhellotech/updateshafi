import React, { useState, lazy, Suspense, useEffect } from "react";

import "./App.css"; // or the path to your custom CSS file

import { Routes, Route, useLocation } from "react-router-dom";

// import About from './components/pages/About/About';
import Treatment from "./components/pages/Treatments/Treatment";
import Product from "./components/pages/Product/Product";
import Contact from "./components/pages/contactpage/Contact";
import Topbar from "./components/common/topbar/Topbar";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import Study from "./components/pages/studycenter/Study";
import Description from "./components/common/studycenter/coursecard/Description";
import PopupCard from "./components/popup/PopupModal";
import BookApp from "./components/common/Home/bookappointment/BookApp";
import Loader from "./Loader";
import PopupManager from "./components/popup/PopupManager";

const LazyHome = lazy(() => import("./components/pages/Home/Home"));
const LazyAbout = lazy(() => import("./components/pages/About/About"));
const LazyTreat = lazy(() => import("./components/pages/Treatments/Treatment"));
const LazyProduct = lazy(() => import("./components/pages/Product/Product"));
const LazyContact = lazy(() =>
  import("./components/pages/contactpage/Contact")
);
const Lazystudy = lazy(() => import("./components/pages/studycenter/Study"));
const Lazydes = lazy(() =>
  import("./components/common/studycenter/coursecard/Description")
);
const LazyBook = lazy(() =>
  import("./components/common/Home/bookappointment/BookApp")
);

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation();

  useEffect(()=>{
    console.log(location)
  },[location])

  const handleFormSubmit = () => {
    // Your form submit logic goes here
    console.log("Form submitted");
  };

  // Define handleCloseFormPopup function
  const handleCloseFormPopup = () => {
    setShowPopup(false);
  };

  // Hide popup when navigating to a different page
  const handleNavigation = () => {
    setShowPopup(false);
  };

  const ErrorPage = () => {

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow:'hidden'
        }}
      >
        <h1>404 not found</h1>
      </div>
    );
  };

  return (
    <div className="App">
      {location.pathname !== "/*" && showPopup && (
        <PopupCard
          onSubmit={handleFormSubmit}
          onClose={handleCloseFormPopup}
          images={[
            "assets/img/products/padimage.jpg",
            "assets/img/products/all_products_-01.jpg",
            "assets/img/products/all_products_-02.jpg",
            "assets/img/products/slim_369_box_.png",
          ]}
        />
      )}
      

      <Topbar />
      <Navbar />
      <Routes>
        <Route
          path="/"
            element={
                <Suspense fallback={<Loader open={true} />}>
                  <LazyHome />
                </Suspense>
            }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path="/treatment"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <LazyTreat />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <LazyProduct />
            </Suspense>
          }
        />
        <Route
          path="/institution"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <Lazystudy />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <LazyContact />
            </Suspense>
          }
        />
        <Route
          path="/description"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <Lazydes />
            </Suspense>
          }
        />
        <Route
          path="/Bookapp"
          element={
            <Suspense fallback={<Loader open={true} />}>
              <LazyBook />
            </Suspense>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
