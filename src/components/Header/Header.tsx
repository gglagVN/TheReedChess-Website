import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left Section - Logo & Brand */}
        <div className={styles.leftSection}>
          <img 
            src={logo}
            alt="The Reed Chess Logo" 
            className={styles.logo}
          />
          <span className={styles.brandName}>The Reed Chess</span>
        </div>

        {/* Right Section - Phone & Facebook */}
        <div className={styles.rightSection}>
          <a href="tel:+84838012316" className={styles.phoneNumber}>
            <i className={styles.icon}>📱</i>
            <span>083 801 2316</span>
          </a>
          <a 
            href="https://www.facebook.com/clbcovuabonglau" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.facebookLink}
          >
            <i className={styles.facebookIcon}>📘</i>
            <span>CLB The Reed Chess</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;