import type { NextPage } from "next";
import styles from "./course-container.module.css";

type CourseContainerType = {
  courseSectionInstructions?: string;
};

const CourseContainer: NextPage<CourseContainerType> = ({
  courseSectionInstructions,
}) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameContainer}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/.svg" />
          <div className={styles.parent}>
            <div className={styles.readingWriting}>
              {courseSectionInstructions}
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-2840@2x.png"
              />
              <div className={styles.estherHowardParent}>
                <div className={styles.estherHoward}>Esther Howard</div>
                <div className={styles.ceoSlack}>CEO, Slack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
