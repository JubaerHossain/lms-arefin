import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./dream-university-container.module.css";

type DreamUniversityContainerType = {
  admissionExamText?: string;
  admissionRequirementsText?: string;
  careerGoalsText?: string;
  examImageUrl?: string;
  courseText?: string;
  governmentJobRequirements?: string;
  universityAdmissionText?: string;
  engineeringMedicalUnivers?: string;
  bankJobRequirementsText?: string;
  targetJobText?: string;
  universityCourseText?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propPadding?: Property.Padding;
};

const DreamUniversityContainer: NextPage<DreamUniversityContainerType> = ({
  admissionExamText,
  admissionRequirementsText,
  careerGoalsText,
  examImageUrl,
  courseText,
  governmentJobRequirements,
  universityAdmissionText,
  engineeringMedicalUnivers,
  bankJobRequirementsText,
  targetJobText,
  universityCourseText,
  propBackgroundColor,
  propPadding,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  return (
    <div className={styles.frameWrapper} style={frameDiv1Style}>
      <div className={styles.admissionExamParent}>
        <div className={styles.admissionExam}>
          <div className={styles.textAndSubText}>
            <div className={styles.div}>{admissionExamText}</div>
            <div className={styles.div1}>{admissionRequirementsText}</div>
            <div className={styles.div2}>{careerGoalsText}</div>
          </div>
          <div className={styles.courses}>
            <div className={styles.cardLight}>
              <img
                className={styles.cardLightChild}
                alt=""
                src={examImageUrl}
              />
              <div className={styles.aUnitParent}>
                <div className={styles.aUnit}>{courseText}</div>
                <div className={styles.parent}>
                  <div className={styles.div}>বিস্তারিত</div>
                  <img
                    className={styles.uarrowRightIcon}
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.cardLight}>
              <img
                className={styles.cardLightChild}
                alt=""
                src={governmentJobRequirements}
              />
              <div className={styles.aUnitParent}>
                <div className={styles.aUnit}>{universityAdmissionText}</div>
                <div className={styles.parent}>
                  <div className={styles.div}>বিস্তারিত</div>
                  <img
                    className={styles.uarrowRightIcon}
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.cardLight}>
              <img
                className={styles.cardLightChild}
                alt=""
                src={engineeringMedicalUnivers}
              />
              <div className={styles.aUnitParent}>
                <div className={styles.aUnit}>{bankJobRequirementsText}</div>
                <div className={styles.parent}>
                  <div className={styles.div}>বিস্তারিত</div>
                  <img
                    className={styles.uarrowRightIcon}
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.cardLight}>
              <img
                className={styles.cardLightChild}
                alt=""
                src={targetJobText}
              />
              <div className={styles.aUnitParent}>
                <div className={styles.aUnit}>{universityCourseText}</div>
                <div className={styles.parent}>
                  <div className={styles.div}>বিস্তারিত</div>
                  <img
                    className={styles.uarrowRightIcon}
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.parent2}>
          <div className={styles.div7}>সকল কোর্স</div>
          <img
            className={styles.uarrowRightIcon}
            alt=""
            src="/systemlinearrowdroprightline1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DreamUniversityContainer;
