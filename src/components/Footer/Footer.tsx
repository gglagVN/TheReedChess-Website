import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Cột 1 - Thông tin liên hệ */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>CÂU LẠC BỘ THE REED CHESS</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <i className="fas fa-map-marker-alt"></i>
              <div className={styles.itemContent}>
                <strong>Trụ sở chính:</strong>
                <span>Số 04, Đường Phan Đình Phùng, Phường Vân Giang, TP Ninh Bình, Ninh Bình</span>
              </div>
            </li>
            <li className={styles.footerItem}>
              <i className="fas fa-phone"></i>
              <div className={styles.itemContent}>
                <strong>Điện thoại:</strong>
                <a href="tel:0838012316">083 801 2316</a>
              </div>
            </li>
            <li className={styles.footerItem}>
              <i className="fas fa-envelope"></i>
              <div className={styles.itemContent}>
                <strong>Email:</strong>
                <a href="mailto:thereedchessnb@gmail.com">thereedchessnb@gmail.com</a>
              </div>
            </li>
            <li className={styles.footerItem}>
              <i className="fas fa-globe"></i>
              <div className={styles.itemContent}>
                <strong>Website:</strong>
                <a href="/">Trang chủ</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Cột 2 - Đường dẫn nhanh */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>ĐƯỜNG DẪN NHANH</h3>
          <ul className={styles.quickLinks}>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="/about">Giới thiệu</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="/courses">Khóa học</a>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
              <a href="/contact">Liên hệ</a>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Video Youtube */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>YOUTUBE</h3>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/g18B9gptZFk"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;