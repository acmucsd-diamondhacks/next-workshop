import styles from "./style.module.css";

const ListingCard = ({ image, title, price }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_price}>{price}</p>
      <a href="#" className={styles.card_button}>Claim Booty</a>
    </div>
  );
};

export default ListingCard;
