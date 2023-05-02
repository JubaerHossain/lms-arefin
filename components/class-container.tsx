import type { NextPage } from "next";
import styles from "./class-container.module.css";

type ClassContainerType = {
  courseImageUrl?: string;
  courseName?: string;
  courseDescription?: string;
  courseIconUrl?: string;
  careerPreparationText?: string;
  courseTypeText?: string;
};

const ClassContainer: NextPage<ClassContainerType> = ({
  courseImageUrl,
  courseName,
  courseDescription,
  courseIconUrl,
  careerPreparationText,
  courseTypeText,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.image213Parent}>
          <img className={styles.image213Icon} alt="" src={courseImageUrl} />
          <div className={styles.parent}>
            <div className={styles.div}>{courseName}</div>
            <div className={styles.div1}>{courseDescription}</div>
          </div>
        </div>
        <img
          className={styles.systemLinearrowDropRightLIcon}
          alt=""
          src="/systemlinearrowdroprightline4.svg"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.image213Parent}>
          <img className={styles.image213Icon} alt="" src={courseIconUrl} />
          <div className={styles.group}>
            <div className={styles.div}>{careerPreparationText}</div>
            <div className={styles.div1}>{courseTypeText}</div>
          </div>
        </div>
        <img
          className={styles.systemLinearrowDropRightLIcon}
          alt=""
          src="/systemlinearrowdroprightline4.svg"
        />
      </div>
    </div>
  );
};

export default ClassContainer;
