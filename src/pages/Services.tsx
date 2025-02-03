import React from "react";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.mainTitle}>Dịch vụ</h1>

      <div className={styles.serviceSection}>
        <h2>Đánh giá và Phân lớp</h2>
        <p>
          Tại Câu Lạc Bộ Cờ Vua The Reed Chess - Ninh Bình học viên mới đều được
          kiểm tra, đánh giá trình độ đầu vào để xếp lớp phù hợp trình độ, đảm
          bảo chất lượng lớp học.
        </p>
      </div>

      <div className={styles.serviceSection}>
        <h2>Sự kiện "Cờ lau tập trận"</h2>
        <p>Là sự kiện hàng tháng được CLB The Reed Chess tổ chức, nhằm:</p>
        <ul>
          <li>Tạo sân chơi bổ ích, lành mạnh</li>
          <li>Tăng cường tình đoàn kết, giao lưu, học hỏi</li>
          <li>Rèn luyện tâm lý, tư duy, bản lĩnh và tác phong</li>
          <li>Kết nối học viên trong và ngoài CLB</li>
        </ul>
      </div>

      <div className={styles.serviceSection}>
        <h2>Giải đấu Online</h2>
        <p>
          Tổ chức giải đấu online hàng tuần (miễn phí tham dự) với các đặc điểm:
        </p>
        <ul>
          <li>Cơ hội thể hiện kỹ năng</li>
          <li>Rèn luyện bản lĩnh thi đấu</li>
          <li>Phát triển tinh thần thể thao</li>
          <li>Được đánh giá và nhận xét từ đội ngũ huấn luyện viên</li>
          <li>Nhận hỗ trợ kịp thời cho sự phát triển chuyên môn</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
