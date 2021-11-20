import { Link } from "react-router-dom";
import {useState} from 'react';
import Modal from "./Modal"

function Navbar() {
    const handleClick = () => {
        const modal = document.getElementById('about-modal');
        modal.style.display = 'block';
    }

    return (
        <div className="navbar">
            <div className="navbar animate-top">
                <Link to="/">
                    <button className="navbar-btn">Home</button>
                </Link>
                <button className="navbar-btn" id="modal-btn" onClick={handleClick}>Wish List</button>
            </div>

            <div className="clearer"></div>
        </div>
    );
}
 
export default Navbar;