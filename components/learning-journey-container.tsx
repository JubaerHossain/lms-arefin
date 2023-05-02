import type { NextPage } from "next";
import ClassContainer from "./class-container";
import styles from "./learning-journey-container.module.css";
const LearningJourneyContainer: NextPage = () => {
  return (
    <div className={styles.mainContainerInner}>
      <div className={styles.textAndSubTextParent}>
        <div className={styles.textAndSubText}>
          <div className={styles.div}>
            <p className={styles.p}>নিজের শেখা নিজেই গুছিয়ে</p>
            <p className={styles.p}>নেয়ার যাত্রা শুরু হোক</p>
          </div>
          <div className={styles.div1}>
            যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
          </div>
        </div>
        <div className={styles.frameParent}>
          <ClassContainer
            courseImageUrl="/image-2131@2x.png"
            courseName="ক্লাস ৫-১২"
            courseDescription="ফ্রি ভিডিও, লাইভ ক্লাস"
            courseIconUrl="/image-2132@2x.png"
            careerPreparationText="স্কিলস"
            courseTypeText="ইংলিশ, ফ্রিল্যান্সিং, স্কিলস ও আইটি"
          />
          <ClassContainer
            courseImageUrl="/image-2133@2x.png"
            courseName="ভর্তি পরীক্ষা"
            courseDescription="বিশ্ববিদ্যালয়+গুচ্ছ, মেডিক্যাল"
            courseIconUrl="/image-2134@2x.png"
            careerPreparationText="চাকরি প্রস্তুতি"
            courseTypeText="বিসিএস, ব্যাংক জবস, সরকারি চাকরি"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningJourneyContainer;
