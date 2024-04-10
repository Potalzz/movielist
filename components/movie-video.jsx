import { API_URL } from "../app/constant";
import styles from "../styles/movie-video.module.css";

async function getVideo(id) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieVideo({ id }) {
  const videos = await getVideo(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <div key={video.id} className={styles.video}>
          <iframe
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        </div>
      ))}
    </div>
  );
}
