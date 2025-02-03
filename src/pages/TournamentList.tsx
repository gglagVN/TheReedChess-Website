import React from "react";
import { Link } from "react-router-dom";
import styles from "./TournamentList.module.css";

interface Tournament {
  id: number;
  title: string;
  date: string;
  location: string;
  thumbnail: string;
  status: "upcoming" | "ongoing" | "completed";
  registrationDeadline: string;
}

const tournaments: Tournament[] = [
  {
    id: 1,
    title: "Giải Vô Địch Cờ Vua Trẻ The Reed Chess 2025",
    date: "2025-03-15",
    location: "Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình",
    thumbnail: "/images/tournaments/tournament1.jpg",
    status: "upcoming",
    registrationDeadline: "2025-03-10",
  },
  // Thêm các giải đấu khác
];

const TournamentList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Tin Giải Đấu</h1>

      <div className={styles.tournamentGrid}>
        {tournaments.map((tournament) => (
          <Link
            to={`/tournaments/${tournament.id}`}
            key={tournament.id}
            className={styles.tournamentCard}
          >
            <div className={styles.imageWrapper}>
              <img
                src={tournament.thumbnail}
                alt={tournament.title}
                className={styles.thumbnail}
              />
              <span className={`${styles.status} ${styles[tournament.status]}`}>
                {tournament.status === "upcoming"
                  ? "Sắp diễn ra"
                  : tournament.status === "ongoing"
                  ? "Đang diễn ra"
                  : "Đã kết thúc"}
              </span>
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{tournament.title}</h2>
              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📅</span>
                  {new Date(tournament.date).toLocaleDateString("vi-VN")}
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.icon}>📍</span>
                  {tournament.location}
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.icon}>⏰</span>
                  Hạn đăng ký:{" "}
                  {new Date(tournament.registrationDeadline).toLocaleDateString(
                    "vi-VN"
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TournamentList;
