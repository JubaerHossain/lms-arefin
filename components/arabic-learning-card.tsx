import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./arabic-learning-card.module.css";

type ArabicLearningCardType = {
  courseImageId?: string;
  courseTitle?: string;
  instructorName?: string;

  /** Style props */
  propHeight?: Property.Height;
  propFlexShrink?: Property.FlexShrink;
};

const ArabicLearningCard: NextPage<ArabicLearningCardType> = ({
  courseImageId,
  courseTitle,
  instructorName,
  propHeight,
  propFlexShrink,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
    };
  }, [propHeight, propFlexShrink]);

  return (
    <div className={styles.cardDark}>
      <img className={styles.cardDarkChild} alt="" src={courseImageId} />
      <div className={styles.frameParent}>
        <div className={styles.ieltsCourseByMunzereenShahParent}>
          <div className={styles.ieltsCourseBy}>{courseTitle}</div>
          <div className={styles.munzereenShahid}>{instructorName}</div>
        </div>
        <div className={styles.parent} style={frameDivStyle}>
          <div className={styles.div}>বিস্তারিত</div>
          <img
            className={styles.uarrowRightIcon}
            alt=""
            src="/uarrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ArabicLearningCard;
