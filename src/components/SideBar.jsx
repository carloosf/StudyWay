import React from "react";
import { BiBook, BiLinkAlt, BiHomeAlt2 } from 'react-icons/bi';
import styled from "styled-components";
import { Link } from "react-router-dom";

//Estilização

const SideBar = styled.ul`
  font-size: 1.5rem;
  width: 5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(34, 32, 28);
  list-style: none;
  flex-shrink: 0;
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

function SideBarComponent() {

  return (
    <SideBar className="SideBar">

      <Link to="/" ><Icon>
        <BiHomeAlt2 />
      </Icon>
      </Link>

      <Link to="/assuntos
      
      " ><Icon>
        <BiBook />
      </Icon>
      </Link>

      <a href="https://wa.me/5581971066216?text=Me+helpa+com+codigo" target="_blank"><Icon>
        <BiLinkAlt />
      </Icon>
      </a>

    </SideBar>

  )
}

export default SideBarComponent
