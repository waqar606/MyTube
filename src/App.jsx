import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Loading";

const App = () => {
  const { loading } = useAuth();
  // const { loading, data } = useAuth();
  // console.log(loading);
  // console.log(data);

  return (
    <>
      <Router>
        {loading && <Loading />}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/search/:searchQuery" element={<Search />} /> */}
          {/* when video is played */}
          <Route path="/video/:id" element={<PlayingVideo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
