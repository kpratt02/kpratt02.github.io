"use client"
import React, { useState } from 'react';
import './sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <nav>
          <ul>
            <li><a href="#about" onClick={toggleSidebar}>About</a></li>
            <li><a href="#experience" onClick={toggleSidebar}>Experience and Education</a></li>
            <li><a href="#skills" onClick={toggleSidebar}>Skills</a></li>
            <li><a href="#projects" onClick={toggleSidebar}>Projects, Publications, and Passions</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;