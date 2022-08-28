// import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <div className={styles.layout}>
        { children }
      </div>
      <Navbar />
    </div>
  );
}
 
export default Layout;