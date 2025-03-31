import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Image width={50} height={50} src="/assets/logo.png"></Image>
        <h1>HackHeist</h1>
      </div>
      <div className={styles.navButtons}>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
