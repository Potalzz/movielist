"use client";

import { useState, useEffect } from "react";
import { API_URL } from "../app/constant";
import styles from "../styles/movie-credit.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function MovieCredit({ id }) {
  const [credits, setCredits] = useState([]);

  const getCredits = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}/credits`);
      const json = await response.json();
      setCredits(json);
    } catch (error) {
      console.error("Error Data", error);
    }
  };

  useEffect(() => {
    getCredits();
  }, []);

  const filteredCredits = credits.filter((credit) => credit.profile_path);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={styles.container}
    >
      {filteredCredits.map((credit) => (
        <div>
          <SwiperSlide>
            <img
              src={
                credit.profile_path
                  ? credit.profile_path
                  : "https://via.placeholder.com/185x278?text=No+Image"
              }
              alt={credit.name}
            />
            <h3 className={styles.name}>{credit.name}</h3>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}

// <div className={styles.container}>
//   {credits.map((credit) => (
//     <div>
//       <img src={credit.profile_path} alt={credit.name} />
//       <h3>{credit.name}</h3>
//     </div>
//   ))}
// </div>;
