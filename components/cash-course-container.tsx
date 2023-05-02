import type { NextPage } from "next";
import CourseInfoContainer from "./course-info-container";
import styles from "./cash-course-container.module.css";
const CashCourseContainer: NextPage = () => {
  return (
    <div className={styles.admissionExamWrapper}>
      <div className={styles.admissionExam}>
        <div className={styles.div}>চলে এসেছে নতুন ক্র্যাশ কোর্স</div>
        <div className={styles.courses}>
          <CourseInfoContainer
            courseImageUrl="/rectangle-14@2x.png"
            courseName="SSC 2023 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]"
          />
          <CourseInfoContainer
            courseImageUrl="/rectangle-141@2x.png"
            courseName="HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র [বিজ্ঞান বিভাগ]"
          />
          <CourseInfoContainer
            courseImageUrl="/rectangle-142@2x.png"
            courseName="HSC 23 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]"
          />
          <CourseInfoContainer
            courseImageUrl="/rectangle-143@2x.png"
            courseName="ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
          />
        </div>
      </div>
    </div>
  );
};

export default CashCourseContainer;
