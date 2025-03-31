import heistInfo from "./heistInfo";
import HeistCard from "./components/HeistCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Heist Marketplace</h1>
      <div className={styles.heist_list}>
        {heistInfo.map((heist, index) => (
          <HeistCard 
            key={index} 
            image={heist.image} 
            title={heist.title} 
            location={heist.location} 
            payout={heist.payout} 
            difficulty={heist.difficulty} 
          />
        ))}
      </div>
    </main>
  );
}
