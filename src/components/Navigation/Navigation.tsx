import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/about', label: 'Về Chúng Tôi' },
    { path: '/contact', label: 'Liên Hệ' },
    { path: '/services', label: 'Dịch Vụ' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <div className={styles.userInfo}>
          <span className={styles.time}>
            {new Date().toLocaleString('en-GB', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })}
          </span>
          <span className={styles.user}>
            👤 {/* Thay bằng icon người dùng */}
            <span>{location.pathname === '/' ? 'gglagVN' : 'gglagVN'}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;