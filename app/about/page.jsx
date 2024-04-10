import Movie from "../../components/movie";
import { API_URL } from "../constant";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function home() {
  const movies = await getMovies();

  return (
    <div>
      <h1>Action</h1>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
