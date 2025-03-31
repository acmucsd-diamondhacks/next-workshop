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
      {/* Extra: Use .repeat() to display the stars for the difficulty! */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat */}
      {/* For the join heist button, use the Link component! See an example in Navbar and use a placeholder link */}
    </div>
  );
};

export default HeistCard;
