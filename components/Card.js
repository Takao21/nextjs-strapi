import styled from "@emotion/styled";
import React from "react";

const Card = ({ movie }) => {
  const { API_URL } = process.env;
  return (
    <CardStyled>
      <div className="poster">
        <img
          src={API_URL + movie.attributes.poster.data.attributes.url}
          alt="movie poster"
          layout="fill"
        />
      </div>
      <div className="body">
        <h3>{movie.attributes.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.attributes.description }} />
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .poster {
    img {
      width: 100%;
    }
  }

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }
    p {
      color: #666666;
      line-height: 1.5;
    }
  }
`;

export default Card;
