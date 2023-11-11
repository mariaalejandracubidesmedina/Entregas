import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (   

    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-lg">Delicious Protein Stead</a>
        
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>          
          <li><Link to="/login" className="text-white">Login</Link></li>   
          <li><Link to="/register" className="text-white">Register</Link></li>         
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;