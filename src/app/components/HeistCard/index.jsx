import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const HeistCard = ({ image, title, location, payout, difficulty }) => {
  const starMap = {
    Easy: 1,
    Medium: 3,
    Hard: 5,
    Extreme: 7,
  };

  return (
    <div className={styles.card}>
      <Image
        className={styles.card_img}
        src={image}
        alt="Heist Image"
        width={400}
        height={300}
      />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_info}>Location: {location}</p>
      <p className={styles.card_info}>Payout: ${payout}</p>
      <p className={styles.card_info}>
        Difficulty: {difficulty} {"⭐️".repeat(starMap[difficulty])}
      </p>
      <Link href="#" className={styles.card_button}>
        Join Heist
      </Link>
    </div>
  );
};

export default HeistCard;
