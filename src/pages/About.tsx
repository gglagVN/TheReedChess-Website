import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <h1>Về Chúng Tôi</h1>
        <p className={styles.introText}>
          Câu Lạc Bộ Cờ Vua The Reed Chess hướng đến việc trở thành trung tâm
          hàng đầu trong việc phát triển và thúc đẩy phong trào cờ vua tại Ninh
          Bình, đồng thời mở rộng ảnh hưởng của mình ra toàn quốc.
        </p>
      </div>

      <div className={styles.historySection}>
        <h2>Lịch Sử Hình Thành</h2>
        <p>
          Được thành lập vào năm 2019 dưới sự quản lý của Công ty TNHH The Reed
          Chess, CLB Cờ Vua tự hào là đơn vị tiên phong trong việc phát triển
          phong trào cờ vua tại Ninh Bình.
        </p>
      </div>

      <div className={styles.missionSection}>
        <h2>Sứ Mệnh</h2>
        <ul>
          <li>
            Tạo ra các hoạt động cờ vua lành mạnh, bổ ích cho trẻ em tại Ninh
            Bình
          </li>
          <li>Tìm kiếm và hỗ trợ các tài năng trẻ trong môn cờ vua</li>
          <li>
            Cung cấp thông tin cập nhật, kết nối những người yêu thích cờ vua
          </li>
          <li>Tổ chức các giải đấu và hoạt động cộng đồng</li>
          <li>Áp dụng các phương pháp giảng dạy sáng tạo</li>
        </ul>
      </div>

      <div className={styles.locationSection}>
        <h2>Hệ Thống Cơ Sở</h2>
        <div className={styles.locations}>
          <div className={styles.locationItem}>
            <h3>CS1</h3>
            <p>Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình</p>
          </div>
          <div className={styles.locationItem}>
            <h3>CS2</h3>
            <p>Tiểu học Ninh Khánh, TP Ninh Bình</p>
          </div>
          <div className={styles.locationItem}>
            <h3>CS3</h3>
            <p>Tiểu học Trần Phú, Bắc Sơn, TP Tam Điệp</p>
          </div>
          <div className={styles.locationItem}>
            <h3>CS4</h3>
            <p>255 Nguyễn Công Trứ, Thanh Bình, TP Ninh Bình</p>
          </div>
          <div className={styles.locationItem}>
            <h3>CS5</h3>
            <p>Tiểu học Thị trấn Thiên Tôn, Thiên Tôn, Hoa Lư, Ninh Bình</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
