import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import {Home} from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Navbar></Navbar>
        <div id="body-page">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<MovieDetails/>}/>
          </Routes>
        </div>
        <Footer></Footer>
        <Modal></Modal>
      </div>
    </Router>
  );
}

export default App;
