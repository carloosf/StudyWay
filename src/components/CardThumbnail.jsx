import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 10px;
`;

const CardThumbnail = ({ imageSrc, title, description }) => {
                     return (
                                          <Card>
                                                               <Thumbnail src={imageSrc} alt={title} />
                                                               <Title>{title}</Title>
                                                               <Description>{description}</Description>
                                          </Card>
                     );
};

export default CardThumbnail;
