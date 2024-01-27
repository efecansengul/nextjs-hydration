import styles from "./Header.module.css";
import ProfileBar from "../profilebar/ProfileBar";
import Basket from '../basket/Basket';
import Link from "next/link";
function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">Logo</Link>
       <ProfileBar />
      <Basket />
    </header>
  );
}

export default Header;
