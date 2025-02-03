import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Liên hệ</h1>
      <p>
        Chúng tôi rất vui lòng nhận được phản hồi và câu hỏi từ bạn. Vui lòng
        liên hệ với chúng tôi qua các thông tin dưới đây:
      </p>
      <ul>
        <li>Địa chỉ: Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình</li>
        <li>Điện thoại: 0123-456-789</li>
        <li>Email: contact@thereedchess.com</li>
      </ul>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Tên</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Tin nhắn</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default Contact;
