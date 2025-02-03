import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      alert("Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h1>Liên Hệ</h1>
        <div className={styles.infoSection}>
          <h2>Thông Tin Liên Hệ</h2>
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <i className={styles.icon}>📍</i>
              <div>
                <h3>Địa Chỉ</h3>
                <p>Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <i className={styles.icon}>📞</i>
              <div>
                <h3>Điện Thoại</h3>
                <p>0123-456-789</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <i className={styles.icon}>📧</i>
              <div>
                <h3>Email</h3>
                <p>contact@thereedchess.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h2>Gửi Tin Nhắn</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Nhập địa chỉ email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Chủ đề</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Nhập chủ đề"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Nội dung tin nhắn</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Nhập nội dung tin nhắn"
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
