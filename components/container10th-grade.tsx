import type { NextPage } from "next";
import styles from "./container10th-grade.module.css";
const Container10thGrade: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.image213Parent}>
        <img className={styles.image213Icon} alt="" src="/image-213@2x.png" />
        <div className={styles.parent}>
          <div className={styles.div}>১০ম শ্রেণি</div>
          <div className={styles.div1}>
            <p className={styles.p}>বিজ্ঞানের ৫টি বিষয় ও</p>
            <p className={styles.p}>ইংরেজি</p>
          </div>
        </div>
        <img
          className={styles.uarrowRightIcon}
          alt=""
          src="/uarrowright2.svg"
        />
      </div>
    </div>
  );
};

export default Container10thGrade;
