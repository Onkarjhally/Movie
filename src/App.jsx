import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
