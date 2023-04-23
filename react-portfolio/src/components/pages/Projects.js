import React from "react";
import { useState, useRef, useEffect } from 'react';
import data from "../carousel.json";


export default function Projects() {
    return (
        <div className="header">
          <h1>Projects</h1>
          
          <ul className="parent">
          <li style={{ backgroundImage: `url(${data.imageUrl || ''})` }}>Wellness Watcher </li>
          <li>Git Gist</li>
          <li>Text Editor</li>
          <li>Password Generator</li>
          <li>Quiz Game</li>
          <li>Cosmos "coming soon"</li>
          </ul>
        </div>
      );
}