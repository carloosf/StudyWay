import React from "react";
import CardThumbnail from "../components/CardThumbnail";
import styled from "styled-components";

const GradeAssuntos = styled.ul`

//config layout
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(auto, 1fr);
grid-column-gap: 20px;
grid-row-gap: 20px;

//Config tamanho
width: 95vw;
height: 100vh;


//config estilização
list-style: none;
cursor: pointer;
`


const Assuntos = () => {
  const listaConteudo = [
    {
      Aula: "Introdução à HTML",
      thumb: "src/assets/thumb-html.png",
      description: "Este é um exemplo de como usar o componente CardThumbnail.",
    },
    {
      Aula: "Introdução à CSS",
      thumb: "src/assets/thumb-css.png",
      description: "Este é um exemplo de como usar o componente CardThumbnail.",
    },
    {
      Aula: "Introdução à CSS",
      thumb: "src/assets/thumb-js.png",
      description: "Este é um exemplo de como usar o componente CardThumbnail.",
    },
    {
      Aula: "Introdução à ReactJS",
      thumb: "src/assets/thumb-react.png",
      description: "Este é um exemplo de como usar o componente CardThumbnail.",
    },

  ];


  return (
    <GradeAssuntos>
      {listaConteudo.map((conteudo, index) => (
        <CardThumbnail
          key={index}
          imageSrc={conteudo.thumb}
          title={conteudo.Aula}
          description={conteudo.description}
        />
      ))}
    </GradeAssuntos>
  );
};

export default Assuntos;
