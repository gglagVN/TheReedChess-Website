import styles from "./Home.module.css";

const Home = () => {
  const coachImages = [
    "/src/assets/images/coach1.jpg",
    "/src/assets/images/coach2.jpg",
    "/src/assets/images/coach3.jpg",
    "/src/assets/images/coach4.jpg",
  ];
  return (
    <div className={styles.homeContainer}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <div className={styles.imageContainer}>
          <img
            src="/src/assets/images/chess-hero.jpg"
            alt="The Reed Chess Club"
            className={styles.chessBanner}
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.mainTitle}>The Reed Chess</h1>
            <p className={styles.subTitle}>Your Gateway to Chess Mastery</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Giới thiệu về CLB The Reed Chess</h2>
            <p>
              CLB The Reed Chess là một không gian đặc biệt dành cho những người
              yêu thích môn cờ vua. Được thành lập với mục tiêu phát triển và
              lan tỏa niềm đam mê với bộ môn trí tuệ này, chúng tôi tự hào mang
              đến một môi trường học tập và rèn luyện chuyên nghiệp.
            </p>
            <p>Tại CLB, chúng tôi cung cấp:</p>
            <ul>
              <li>Lớp học cờ vua cho mọi trình độ</li>
              <li>Tổ chức giải đấu thường xuyên</li>
              <li>Không gian thực hành rộng rãi, thoải mái</li>
              <li>Đội ngũ giảng viên nhiều kinh nghiệm</li>
            </ul>
          </div>
          <div className={styles.aboutImage}>
            <img
              src="/src/assets/images/chess-club.jpg"
              alt="Chess Club Activities"
            />
          </div>
        </div>
      </section>
      {/* Locations Section */}
      <section className={styles.locationsSection}>
        <div className={styles.locationsContent}>
          <h2>Hệ thống cơ sở CLB The Reed Chess</h2>
          <div className={styles.locationsList}>
            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>CS1</div>
              <div className={styles.locationInfo}>
                <h3>Cơ sở 1</h3>
                <p>Số 4 Phan Đình Phùng, Vân Giang, TP Ninh Bình</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>CS2</div>
              <div className={styles.locationInfo}>
                <h3>Cơ sở 2</h3>
                <p>Tiểu học Ninh Khánh, TP Ninh Bình</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>CS3</div>
              <div className={styles.locationInfo}>
                <h3>Cơ sở 3</h3>
                <p>Tiểu học Trần Phú, Bắc Sơn, TP Tam Điệp</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>CS4</div>
              <div className={styles.locationInfo}>
                <h3>Cơ sở 4</h3>
                <p>255 Nguyễn Công Trứ, Thanh Bình, TP Ninh Bình</p>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>CS5</div>
              <div className={styles.locationInfo}>
                <h3>Cơ sở 5</h3>
                <p>Tiểu học Thị trấn Thiên Tôn, Thiên Tôn, Hoa Lư, Ninh Bình</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... (giữ nguyên các phần trước) ... */}

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContent}>
          <h2>Tại sao nên chọn CLB The Reed Chess?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>♔</div>
              <h3>Đội ngũ giảng viên chất lượng</h3>
              <p>
                Giảng viên có trình độ chuyên môn cao, nhiều kinh nghiệm giảng
                dạy và thi đấu cờ vua chuyên nghiệp.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>♕</div>
              <h3>Phương pháp giảng dạy hiện đại</h3>
              <p>
                Áp dụng phương pháp giảng dạy tương tác, kết hợp học và chơi,
                giúp học viên tiếp thu kiến thức một cách tự nhiên và hiệu quả.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>♖</div>
              <h3>Môi trường học tập chuyên nghiệp</h3>
              <p>
                Cơ sở vật chất hiện đại, không gian học tập thoải mái, trang
                thiết bị đầy đủ cho việc học và thực hành.
              </p>
            </div>

            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>♗</div>
              <h3>Cơ hội phát triển toàn diện</h3>
              <p>
                Thường xuyên tổ chức các giải đấu, giao lưu học hỏi, tạo cơ hội
                cho học viên phát triển kỹ năng và tư duy logic.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Coaches Section */}
      <section className={styles.coachesSection}>
        <div className={styles.coachesContent}>
          <h2 className={styles.coachesTitle}>Đội ngũ huấn luyện viên</h2>
          <div className={styles.coachesGrid}>
            {coachImages.map((imageUrl, index) => (
              <div key={index} className={styles.coachCard}>
                <div className={styles.coachImageWrapper}>
                  <img
                    src={imageUrl}
                    alt={`Coach ${index + 1}`}
                    className={styles.coachImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
