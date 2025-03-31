import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

// Add the missing props we need for the heist card!
const HeistCard = ({ image }) => {
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
      {/* Display the missing props below */}
      <h2 className={styles.card_title}></h2>
      <p className={styles.card_info}></p>
      <p className={styles.card_info}></p>
      {/* Hint: Use .repeat() to display the stars! */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat */}
      <p className={styles.card_info}></p>
      <Link href="#" className={styles.card_button}>
        Join Heist
      </Link>
    </div>
  );
};

export default HeistCard;
