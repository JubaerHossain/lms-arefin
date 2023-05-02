import type { NextPage } from "next";
import { useEffect } from "react";
import CashCourseContainer from "../components/cash-course-container";
import CountrySkillsDevelopmentPlatfo from "../components/country-skills-development-platfo";
import DreamUniversityContainer from "../components/dream-university-container";
import GradeContainer from "../components/grade-container";
import AdmissionContainer from "../components/admission-container";
import LearningJourneyContainer from "../components/learning-journey-container";
import HomeWorkContainer from "../components/home-work-container";
import EducationContainer from "../components/education-container";
import ClassNotesContainer from "../components/class-notes-container";
import JoinBangladeshLearningPlatform from "../components/join-bangladesh-learning-platform";
import DownloadAppContainer from "../components/download-app-container";
import MobileAppContainer from "../components/mobile-app-container";
import styles from "./index.module.css";
const HomePage01: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.homePage01} data-animate-on-scroll>
      <div className={styles.mainContainer}>
        <div className={styles.frameParent}>
          <CashCourseContainer />
          <CountrySkillsDevelopmentPlatfo />
          <DreamUniversityContainer
            admissionExamText="ভর্তি পরীক্ষা"
            admissionRequirementsText="স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি"
            careerGoalsText="ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।"
            examImageUrl="/rectangle-144@2x.png"
            courseText="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
            governmentJobRequirements="/rectangle-143@2x.png"
            universityAdmissionText="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
            engineeringMedicalUnivers="/rectangle-145@2x.png"
            bankJobRequirementsText="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
            targetJobText="/rectangle-146@2x.png"
            universityCourseText="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২"
          />
          <DreamUniversityContainer
            admissionExamText="চাকরি প্রস্তুতি"
            admissionRequirementsText="সরকারি চাকরির সর্বোচ্চ প্রস্তুতি"
            careerGoalsText="বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!"
            examImageUrl="/rectangle-147@2x.png"
            courseText="বিসিএস প্রিলি লাইভ কোর্স"
            governmentJobRequirements="/rectangle-148@2x.png"
            universityAdmissionText="ব্যাংক জবস কোর্স"
            engineeringMedicalUnivers="/rectangle-149@2x.png"
            bankJobRequirementsText="English for Govt. Jobs"
            targetJobText="/rectangle-1410@2x.png"
            universityCourseText="সরকারি চাকরি প্রস্তুতি বেসিক কোর্স"
            propBackgroundColor="#fff"
            propPadding="var(--padding-101xl) var(--padding-29xl) var(--padding-41xl)"
          />
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>আপনার ক্লাস বেছে নিন</div>
          <img
            className={styles.systemLinearrowDropRightLIcon}
            alt=""
            src="/systemlinearrowdroprightline1.svg"
          />
        </div>
        <GradeContainer />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img className={styles.image201Icon} alt="" src="/image-201@2x.png" />
        </div>
        <AdmissionContainer />
        <LearningJourneyContainer />
        <div className={styles.textAndSubText}>
          <div className={styles.div1}>
            <p className={styles.p}>বছর জুড়ে অনলাইন ব্যাচে কী কী</p>
            <p className={styles.p}>থাকছে?</p>
          </div>
          <div className={styles.div2}>
            সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
            পড়াশুনার অগ্রযাত্রা
          </div>
        </div>
        <img className={styles.image230Icon} alt="" src="/image-230@2x.png" />
        <div className={styles.mainContainerInner}>
          <div className={styles.frameGroup}>
            <div className={styles.image231Parent}>
              <img
                className={styles.image231Icon}
                alt=""
                src="/image-231@2x.png"
              />
              <div className={styles.div3}>
                লাইভ ক্লাসের মাধ্যমে সম্পূর্ণ সিলেবাস কাভার
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div4}>
                <p className={styles.p}>
                  একজন শিক্ষক ক্লাস নিবেন, দ্বিতীয় শিক্ষক তোমাদের বিভিন্ন
                  প্রশ্নের উত্তর
                </p>
                <p className={styles.p}>দিবেন</p>
              </div>
            </div>
          </div>
        </div>
        <HomeWorkContainer
          classSheetRecordedClassTe="/image-2311@2x.png"
          classSheetRecordedClassNa="লেকচার শিট এবং রেকর্ডেড ক্লাস"
        />
        <HomeWorkContainer
          classSheetRecordedClassTe="/image-2312@2x.png"
          classSheetRecordedClassNa="নিয়মিত হোমওয়ার্ক ও পরীক্ষা"
          propTop="3132px"
        />
        <div className={styles.frameContainer}>
          <EducationContainer />
          <ClassNotesContainer />
        </div>
        <div className={styles.frameDiv}>
          <JoinBangladeshLearningPlatform />
          <DownloadAppContainer />
        </div>
        <MobileAppContainer />
      </div>
    </div>
  );
};

export default HomePage01;
