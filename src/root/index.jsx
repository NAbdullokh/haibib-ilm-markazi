import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pageItems } from "../utils/pages";
import NotFound from "../page/NotFound";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            {pageItems.map((value) => {
              return <Route path={value.to} element={value.element} />;
            })}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
