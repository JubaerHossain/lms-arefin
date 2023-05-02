import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./language-learning-courses-contain.module.css";

type LanguageLearningCoursesContainType = {
  courseBundleText?: string;

  /** Style props */
  propWidth?: Property.Width;
};

const LanguageLearningCoursesContain: NextPage<
  LanguageLearningCoursesContainType
> = ({ courseBundleText, propWidth }) => {
  const languageLearningCoursesStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.languageLearningCoursesParent}>
        <div
          className={styles.languageLearningCourses}
          style={languageLearningCoursesStyle}
        >
          {courseBundleText}
        </div>
        <div className={styles.courses}>9 Courses</div>
      </div>
    </div>
  );
};

export default LanguageLearningCoursesContain;
