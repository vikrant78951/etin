import React from 'react'
import './Navigation.css'
import { AiOutlineHome } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className="navigation" id="navigation">
      <div className="navigation-tab">
        <ul>
          <li>
            <a href="!#" className='active'>
              <AiOutlineHome />
            </a>
          </li>
          <li>
            <a href="!#" className=''>
              <AiOutlineHome />
            </a>
          </li>
          <li>
            <a href="!#" className=''>
              <AiOutlineHome />
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation-body">
        <ul>
          <li className="navigation-menu navigation-active-menu">
            <a href="!#" className='navigation-menu-link '>
              <span className="icons"> <AiOutlineHome /></span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="navigation-menu">
            <a href="!#" className='navigation-menu-link active'>
              <span className="text">Home 1</span>
            </a>
          </li>
          <li className="navigation-menu">
            <a href="!#" className='navigation-menu-link'>
              <span className="text">Home 2</span>
            </a>
          </li>
          <li className="navigation-menu">
            <a href="!#" className='navigation-menu-link'>
              <span className="text">Home 3</span>
            </a>
          </li>
        </ul>


      </div>
    </div>
  )
}

export default Navigation