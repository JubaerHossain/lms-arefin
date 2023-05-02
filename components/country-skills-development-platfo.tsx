import type { NextPage } from "next";
import { Button } from "@mui/material";
import LanguageLearningCoursesContain from "./language-learning-courses-contain";
import ArabicLearningCard from "./arabic-learning-card";
import styles from "./country-skills-development-platfo.module.css";
const CountrySkillsDevelopmentPlatfo: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div}>স্কিলস</div>
            <div className={styles.div1}>
              দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.systemFillcheckboxCircleFiParent}>
                <img
                  className={styles.systemFillcheckboxCircleFiIcon}
                  alt=""
                  src="/systemfillcheckboxcirclefill.svg"
                />
                <div className={styles.div2}>দেশসেরা শিক্ষক</div>
              </div>
              <div className={styles.systemFillcheckboxCircleFiParent}>
                <img
                  className={styles.systemFillcheckboxCircleFiIcon}
                  alt=""
                  src="/systemfillcheckboxcirclefill.svg"
                />
                <div className={styles.div}>৫ লাখ+শিক্ষার্থী</div>
              </div>
              <div className={styles.systemFillcheckboxCircleFiParent}>
                <img
                  className={styles.systemFillcheckboxCircleFiIcon}
                  alt=""
                  src="/systemfillcheckboxcirclefill.svg"
                />
                <div className={styles.div}>৭০+ অনলাইন কোর্স</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <LanguageLearningCoursesContain courseBundleText="Language Learning Courses" />
              <LanguageLearningCoursesContain
                courseBundleText="Bundle"
                propWidth="87px"
              />
              <textarea
                className={styles.frameChild}
                placeholder={`Skills & IT Courses`}
                defaultValue="9 Courses"
              />
              <textarea className={styles.frameChild} />
              <LanguageLearningCoursesContain
                courseBundleText={`Design & Creative Courses`}
                propWidth="unset"
              />
              <LanguageLearningCoursesContain
                courseBundleText="Kid’s Courses (Age 7-14)"
                propWidth="unset"
              />
            </div>
          </div>
          <div className={styles.cardDarkParent}>
            <div className={styles.cardDark}>
              <img
                className={styles.cardDarkChild}
                alt=""
                src="/rectangle-7@2x.png"
              />
              <div className={styles.frameParent2}>
                <div className={styles.ieltsCourseByMunzereenShahParent}>
                  <div className={styles.ieltsCourseBy}>
                    ঘরে বসে Spoken English
                  </div>
                  <div className={styles.munzereenShahid}>Munzereen Shahid</div>
                </div>
                <Button variant="contained" color="primary">
                  Button
                </Button>
              </div>
            </div>
            <div className={styles.cardDark}>
              <img
                className={styles.cardDarkChild}
                alt=""
                src="/rectangle-71@2x.png"
              />
              <div className={styles.frameParent2}>
                <div className={styles.ieltsCourseByMunzereenShahParent}>
                  <div className={styles.ieltsCourseByContainer}>
                    <p className={styles.shahid}>IELTS Course by Munzereen</p>
                    <p className={styles.shahid}>Shahid</p>
                  </div>
                  <div className={styles.munzereenShahid}>Munzereen Shahid</div>
                </div>
                <Button variant="outlined" color="primary">
                  Button
                </Button>
              </div>
            </div>
            <ArabicLearningCard
              courseImageId="/rectangle-72@2x.png"
              courseTitle="সহজে Spoken আরবি"
              instructorName="Mahade Hasan"
            />
            <ArabicLearningCard
              courseImageId="/rectangle-73@2x.png"
              courseTitle="২৪ ঘণ্টায় কোরআন শিখি"
              instructorName="মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন"
              propHeight="unset"
              propFlexShrink="unset"
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div5}>সকল কোর্স</div>
          <img
            className={styles.systemFillcheckboxCircleFiIcon}
            alt=""
            src="/systemlinearrowdroprightline.svg"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.div6}>
            দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট
            প্রোগ্রাম
          </div>
          <div className={styles.div7}>
            <span>{`আরও জানতে `}</span>
            <span className={styles.span}>ইমেইল করুন</span>
            <span>{` অথবা `}</span>
            <span className={styles.span}>কল করুন</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySkillsDevelopmentPlatfo;
