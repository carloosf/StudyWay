import React from "react";
import { BiBook, BiLinkAlt } from 'react-icons/bi';

import './SideBar.css'

function SideBar() {

  return (
    <ul className="SideBar">

      <li><a href="">
        <BiBook></BiBook></a>
      </li>

      <li><a href="">
        <BiLinkAlt></BiLinkAlt></a>
      </li>

    </ul>

  )
}

export default SideBar
