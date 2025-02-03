import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./TournamentDetail.module.css";

interface Schedule {
  time: string;
  event: string;
}

interface Contact {
  name: string;
  phone: string;
  email: string;
}

interface Tournament {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationDeadline: string;
  prizePool: string;
  rules: string[];
  schedule: Schedule[];
  contact: Contact;
  status: "upcoming" | "ongoing" | "completed";
  image: string;
  totalParticipants: number;
  categories: string[];
  registeredCount: number;
}

const TournamentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const tournament: Tournament = {
    id: 1,
    title: "Giải Vô Địch Cờ Vua Trẻ The Reed Chess 2025",
    date: "2025-03-15",
    location: "Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình",
    description: "Giải đấu thường niên dành cho các kỳ thủ trẻ dưới 15 tuổi...",
    registrationDeadline: "2025-03-10",
    prizePool: "50.000.000 VNĐ",
    rules: [
      "Đối tượng tham gia: Học sinh dưới 15 tuổi",
      "Thể thức thi đấu: Swiss 7 ván",
      "Thời gian: 90 phút + 30 giây/nước đi",
      "Mỗi VĐV cần mang theo giấy khai sinh hoặc thẻ học sinh",
      "Trang phục lịch sự, đúng quy định",
    ],
    schedule: [
      { time: "07:30", event: "Đón tiếp đại biểu và VĐV" },
      { time: "08:00", event: "Khai mạc giải" },
      { time: "08:30", event: "Bắt đầu ván 1" },
      { time: "14:00", event: "Bắt đầu ván 2" },
      { time: "17:00", event: "Kết thúc ngày thi đấu 1" },
    ],
    contact: {
      name: "Ban tổ chức giải đấu",
      phone: "0123-456-789",
      email: "tournament@thereedchess.com",
    },
    status: "upcoming",
    image: "/images/tournaments/tournament1.jpg",
    totalParticipants: 100,
    categories: ["U8", "U10", "U12", "U15"],
    registeredCount: 45,
  };

  if (!tournament) {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.errorContainer}>
          <h2>Không tìm thấy thông tin giải đấu</h2>
          <button
            className={styles.errorButton}
            onClick={() => navigate("/tournaments")}
          >
            Quay lại danh sách giải đấu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button
            className={styles.backButton}
            onClick={() => navigate("/tournaments")}
          >
            ← Quay lại
          </button>

          <img
            src={tournament.image}
            alt={tournament.title}
            className={styles.mainImage}
          />

          <div className={styles.titleWrapper}>
            <h1>{tournament.title}</h1>
            <span className={`${styles.status} ${styles[tournament.status]}`}>
              {tournament.status === "upcoming"
                ? "Sắp diễn ra"
                : tournament.status === "ongoing"
                ? "Đang diễn ra"
                : "Đã kết thúc"}
            </span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.mainInfo}>
            {/* Thông tin chung */}
            <div className={styles.infoCard}>
              <h2>Thông tin chung</h2>
              <ul>
                <li>
                  <span className={styles.icon}>📅</span>
                  <strong>Ngày tổ chức:</strong>{" "}
                  {new Date(tournament.date).toLocaleDateString("vi-VN")}
                </li>
                <li>
                  <span className={styles.icon}>📍</span>
                  <strong>Địa điểm:</strong> {tournament.location}
                </li>
                <li>
                  <span className={styles.icon}>⏰</span>
                  <strong>Hạn đăng ký:</strong>{" "}
                  {new Date(tournament.registrationDeadline).toLocaleDateString(
                    "vi-VN"
                  )}
                </li>
                <li>
                  <span className={styles.icon}>🏆</span>
                  <strong>Giải thưởng:</strong> {tournament.prizePool}
                </li>
                <li>
                  <span className={styles.icon}>👥</span>
                  <strong>Số lượng:</strong> {tournament.registeredCount}/
                  {tournament.totalParticipants} người đăng ký
                </li>
              </ul>
            </div>

            {/* Điều lệ giải đấu */}
            <div className={styles.infoCard}>
              <h2>Điều lệ giải đấu</h2>
              <ul>
                {tournament.rules.map((rule, index) => (
                  <li key={index}>
                    <span className={styles.icon}>📋</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lịch trình */}
            <div className={styles.infoCard}>
              <h2>Lịch trình</h2>
              <div className={styles.schedule}>
                {tournament.schedule.map((item, index) => (
                  <div key={index} className={styles.scheduleItem}>
                    <span className={styles.time}>{item.time}</span>
                    <span className={styles.event}>{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thông tin liên hệ */}
            <div className={styles.infoCard}>
              <h2>Thông tin liên hệ</h2>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>👤</span>
                  <strong>Ban tổ chức:</strong> {tournament.contact.name}
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <strong>Điện thoại:</strong> {tournament.contact.phone}
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <strong>Email:</strong> {tournament.contact.email}
                </div>
              </div>
            </div>
          </div>

          {/* Nút đăng ký */}
          {tournament.status === "upcoming" && (
            <div className={styles.registerSection}>
              <button
                className={styles.registerButton}
                disabled={
                  tournament.registeredCount >= tournament.totalParticipants
                }
              >
                {tournament.registeredCount >= tournament.totalParticipants
                  ? "Đã đủ số lượng đăng ký"
                  : "Đăng ký tham gia"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
