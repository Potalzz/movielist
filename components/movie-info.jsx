import { API_URL } from "../app/constant";
import styles from "../styles/movie-info.module.css";

async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieDetail({ id }) {
  const movie = await getMovie(id);
  const genresMap = movie.genres.map((genre) => genre.name);
  const genres = genresMap.join(", ");

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.rank}>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        {/* <div className={styles.genres}>
          {movie.genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </div> */}
        <br />
        <h3 className={styles.genres}>Genre</h3>
        <p className={styles.genres}>[ {genres} ]</p>
        {movie.homepage ? (
          <a className={styles.homepage} href={movie.homepage}>
            ☑️ {movie.title} Official Website
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
