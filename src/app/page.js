import heistInfo from "./heistInfo";
import HeistCard from "./components/HeistCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Heist Marketplace</h1>
      <div className={styles.heist_list}>
        {/* Display the heist cards here using heist info to fill info for the cards*/}
        {/* Hint: https://coursework.vschool.io/mapping-components-in-react/ */}
      </div>
    </main>
  );
}
