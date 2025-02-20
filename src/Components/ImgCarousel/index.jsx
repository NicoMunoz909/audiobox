import styles from "./imgCarousel.module.css";

const ImgCarousel = ({ images }) => {
  return (
    <div className={styles.container}>
      {images.map((imgUrl) => {
        return (
          <div className={styles.imgContainer}>
            <img src={imgUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default ImgCarousel;
