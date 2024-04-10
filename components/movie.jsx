"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

// async function getMovie(id) {
//   const response = await fetch(`${API_URL}/${id}`);
//   const json = await response.json();
//   // const movie = (await fetch(API_URL)).json();
//   return json;
// }

export default function Movie({ id, title, poster_path }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/movies/${id}`);
  };

  return (
    <div id={id} className={styles.movie}>
      <a href="/" onClick={handleClick}>
        <img src={poster_path} alt={title} />
      </a>
      <h1>{title}</h1>
    </div>
  );
}
