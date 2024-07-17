import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Userlayout from "../Layouts/Userlayout";
import SearchResults from "../Pages/SearchResults";
import PropertyIndetails from "../Pages/PropertyIndetails";
import Login from "../Pages/Login";

const Homeroutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Userlayout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<SearchResults />} />
          <Route path="propertydetails" element={<PropertyIndetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default Homeroutes;
