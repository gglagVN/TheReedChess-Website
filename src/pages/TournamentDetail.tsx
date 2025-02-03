import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./TournamentDetail.module.css";

interface Schedule {
  time: string;
  event: string;
}

interface Contact {
  name: string;
  email: string;
  phone: string;
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
  registeredCount: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

const TournamentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = "gglagVN"; // Thay thế bằng system user sau này

  useEffect(() => {
    const fetchTournament = async () => {
      setIsLoading(true);
      try {
        // Mock data - thay thế bằng API call thực tế sau này
        const mockTournament: Tournament = {
          id: Number(id),
          title: "Giải Vô Địch Cờ Vua The Reed Chess 2025",
          date: "2025-03-15",
          location: "Trung tâm The Reed Chess, 123 Đường ABC, Thành phố XYZ",
          description:
            "Giải đấu cờ vua thường niên lớn nhất khu vực, quy tụ các kỳ thủ xuất sắc tranh tài",
          registrationDeadline: "2025-03-01",
          prizePool: "100.000.000 VNĐ",
          rules: [
            "Đối tượng tham gia: Tất cả các kỳ thủ có đăng ký ELO",
            "Thể thức thi đấu: Swiss 9 ván cờ tiêu chuẩn",
            "Thời gian: 90 phút + 30 giây/nước đi",
            "Luật cờ vua quốc tế FIDE mới nhất",
            "Yêu cầu trang phục lịch sự",
            "Cấm sử dụng thiết bị điện tử trong quá trình thi đấu",
          ],
          schedule: [
            { time: "08:00", event: "Khai mạc giải đấu" },
            { time: "08:30", event: "Bắt đầu ván 1" },
            { time: "14:00", event: "Bắt đầu ván 2" },
            { time: "19:00", event: "Kết thúc ngày thi đấu" },
          ],
          contact: {
            name: "Ban tổ chức The Reed Chess",
            email: "tournament@thereedchess.com",
            phone: "0123.456.789",
          },
          status: "upcoming",
          image: "/tournaments/main-banner.jpg",
          totalParticipants: 128,
          registeredCount: 85,
          createdBy: "gglagVN",
          createdAt: "2025-02-01 00:00:00",
          updatedAt: "2025-02-03 02:20:02",
        };

        setTournament(mockTournament);
      } catch (error) {
        console.error("Error fetching tournament:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchTournament();
    }
  }, [id]);

  const handleEdit = () => {
    navigate(`/tournaments/${id}/edit`);
  };

  const handleDelete = async () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa giải đấu này?")) {
      try {
        // API call để xóa tournament
        // await api.deleteTournament(id);
        navigate("/tournaments");
      } catch (error) {
        console.error("Error deleting tournament:", error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.container}>
          <div className={styles.loading}>Đang tải thông tin giải đấu...</div>
        </div>
      </div>
    );
  }

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

  const isAdmin = currentUser === tournament.createdBy;
  const canRegister =
    tournament.status === "upcoming" &&
    tournament.registeredCount < tournament.totalParticipants;

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
          {isAdmin && (
            <div className={styles.adminActions}>
              <button className={styles.editButton} onClick={handleEdit}>
                Chỉnh sửa
              </button>
              <button className={styles.deleteButton} onClick={handleDelete}>
                Xóa
              </button>
            </div>
          )}
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
            <div className={styles.infoCard}>
              <h2>Thông tin chung</h2>
              <ul>
                <li>
                  <span className={styles.icon}>📅</span>
                  <div>
                    <strong>Ngày tổ chức:</strong>
                    <p>
                      {new Date(tournament.date).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>📍</span>
                  <div>
                    <strong>Địa điểm:</strong>
                    <p>{tournament.location}</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>⏰</span>
                  <div>
                    <strong>Hạn đăng ký:</strong>
                    <p>
                      {new Date(
                        tournament.registrationDeadline
                      ).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>🏆</span>
                  <div>
                    <strong>Tổng giải thưởng:</strong>
                    <p>{tournament.prizePool}</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>👥</span>
                  <div>
                    <strong>Số lượng đăng ký:</strong>
                    <p>
                      {tournament.registeredCount}/
                      {tournament.totalParticipants}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h2>Điều lệ giải đấu</h2>
              <ul className={styles.rulesList}>
                {tournament.rules.map((rule, index) => (
                  <li key={index}>
                    <span className={styles.icon}>📋</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

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

            <div className={styles.infoCard}>
              <h2>Thông tin liên hệ</h2>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>👤</span>
                  <div>
                    <strong>Ban tổ chức:</strong>
                    <p>{tournament.contact.name}</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <strong>Điện thoại:</strong>
                    <p>{tournament.contact.phone}</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📧</span>
                  <div>
                    <strong>Email:</strong>
                    <p>{tournament.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h2>Thông tin khác</h2>
              <div className={styles.metaInfo}>
                <p>
                  <strong>Người tạo:</strong> {tournament.createdBy}
                </p>
                <p>
                  <strong>Ngày tạo:</strong>{" "}
                  {new Date(tournament.createdAt).toLocaleString("vi-VN")}
                </p>
                <p>
                  <strong>Cập nhật lần cuối:</strong>{" "}
                  {new Date(tournament.updatedAt).toLocaleString("vi-VN")}
                </p>
              </div>
            </div>
          </div>

          {canRegister && (
            <div className={styles.registerSection}>
              <button className={styles.registerButton}>
                Đăng ký tham gia
              </button>
              <p className={styles.registerNote}>
                Còn {tournament.totalParticipants - tournament.registeredCount}{" "}
                suất đăng ký
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
