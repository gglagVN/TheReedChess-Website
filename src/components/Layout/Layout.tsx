import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer"; // Import Footer
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
