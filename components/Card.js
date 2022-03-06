import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Card = ({ movie }) => {
  const { API_URL } = process.env;
  return (
    <CardStyled>
      {movie.attributes.poster.data && (
        <div className="poster">
          <Image
            src={API_URL + movie.attributes.poster.data.attributes.url}
            placeholder="blur"
            blurDataURL={API_URL + movie.attributes.poster.data.attributes.url}
            alt="movie poster"
            layout="fill"
            className="poster-img"
          />
        </div>
      )}
      <div className="body">
        <h3>{movie.attributes.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.attributes.description }} />
        <Link
          href="/movies/[genre]/[slug]"
          as={`/movies/${
            movie.attributes.genre.data
              ? movie.attributes.genre.data.attributes.slug
              : "uncategorized"
          }/${movie.attributes.slug}`}
        >
          <a>See More Info</a>
        </Link>
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
    height: 480px;
    position: relative;
    .poster-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: top center;
    }
  }

  .body {
    padding: 20px;
    padding-bottom: 50px;

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
