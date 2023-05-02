import type { NextPage } from "next";
import styles from "./course-info-container.module.css";

type CourseInfoContainerType = {
  courseImageUrl?: string;
  courseName?: string;
};

const CourseInfoContainer: NextPage<CourseInfoContainerType> = ({
  courseImageUrl,
  courseName,
}) => {
  return (
    <div className={styles.cardLightPrice}>
      <img className={styles.cardLightPriceChild} alt="" src={courseImageUrl} />
      <div className={styles.ssc2023Parent}>
        <div className={styles.ssc2023}>{courseName}</div>
        <div className={styles.wrapper}>
          <div className={styles.div}>৳ 2000</div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoContainer;
