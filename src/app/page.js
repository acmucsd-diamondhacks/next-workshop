import ListingCard from "./components/ListingCard";
import styles from "./page.module.css";

export default function Home() {
  const store_info = [
    {
      image: "./assets/item1.png",
      title: "Bucket Hats",
      price: "$100",
    },
  ];
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Pirate Marketplace</h1>
      <div className={styles.store_cards}>
        {store_info.map((workshop, index) => (
          <ListingCard key={index} {...workshop} />
        ))}
      </div>
    </main>
  );
}
