import styles from './cardProduct.module.css';

const CardProduct = ({ title }) => {
  return (
    <div className={styles.product}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default CardProduct;
