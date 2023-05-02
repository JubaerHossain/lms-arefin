import type { NextPage } from "next";
import styles from "./grade-container.module.css";
const GradeContainer: NextPage = () => {
  return (
    <div className={styles.image203Parent}>
      <img className={styles.image203Icon} alt="" src="/image-203@2x.png" />
      <div className={styles.parent}>
        <div className={styles.div}>ক্লাস ৫-১২</div>
        <div className={styles.div}>স্কিলস</div>
        <div className={styles.div}>ভর্তি পরীক্ষা</div>
        <div className={styles.div}>চাকরি প্রস্তুতি</div>
        <div className={styles.div}>অনলাইন ব্যাচ ২০২৩</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div5}>লগ-ইন</div>
      </div>
    </div>
  );
};

export default GradeContainer;
