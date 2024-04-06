import ListingCard from "./components/ListingCard";
import styles from "./page.module.css";

import storeInfo from "./storeInfo";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Pirate Marketplace</h1>
      <div className={styles.store_cards}>
        {storeInfo.map((workshop, index) => (
          <ListingCard key={index} {...workshop} />
        ))}
      </div>
    </main>
  );
}
