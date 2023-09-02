// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Cougar Connect</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Instructors
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Courses
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
