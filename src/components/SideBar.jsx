import React from "react";
import { BiBook, BiLinkAlt } from 'react-icons/bi';
import styled from "styled-components";

function SideBar() {

  //Estilização

  const SideBar = styled.ul`
  font-size: 1.5rem;
  width: 5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(34, 32, 28);
  list-style: none;
  `

  const Icon = styled.li`
  width: 5vw;
  height: 30px;
  color: white;
  padding-block: 20px;
  margin-top: 1rem;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgb(43, 41, 41);
  }

  & *{
    color: white;
  }
  `

  return (
    <SideBar className="SideBar">

      <a href=""><Icon>
        <BiBook></BiBook>
      </Icon>
      </a>

      <a href=""><Icon>
        <BiLinkAlt></BiLinkAlt>
      </Icon>
      </a>

    </SideBar>

  )
}

export default SideBar
