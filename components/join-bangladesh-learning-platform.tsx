import type { NextPage } from "next";
import StudentContainer from "./student-container";
import styles from "./join-bangladesh-learning-platform.module.css";
const JoinBangladeshLearningPlatform: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <div className={styles.div}>
          <p className={styles.p}>আজই জয়েন করুন</p>
          <p className={styles.p}>বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে</p>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <StudentContainer
                totalStudentsAndAppUsersT="1 কোটি +"
                totalStudentsAndAppUsersT2="মোট শিক্ষার্থী"
              />
              <StudentContainer
                totalStudentsAndAppUsersT="47 লক্ষ +"
                totalStudentsAndAppUsersT2="অ্যাপ ব্যবহারকারী"
                propBackgroundColor="#f9f7e6"
              />
            </div>
            <div className={styles.frameDiv}>
              <StudentContainer
                totalStudentsAndAppUsersT="3,000+"
                totalStudentsAndAppUsersT2="স্টাডি ম্যাটেরিয়াল"
                propBackgroundColor="#fff2f2"
              />
              <StudentContainer
                totalStudentsAndAppUsersT="24,000+"
                totalStudentsAndAppUsersT2="লার্নিং কন্টেন্ট"
                propBackgroundColor="#eae9f8"
              />
            </div>
          </div>
          <img className={styles.image233Icon} alt="" src="/image-233@2x.png" />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent2}>
          <div className={styles.group}>
            <div className={styles.div1}>
              কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন
            </div>
            <div className={styles.div2}>সকাল ৮টা থেকে রাত ১১টা পর্যন্ত</div>
          </div>
          <div className={styles.uphonePauseParent}>
            <img
              className={styles.uphonePauseIcon}
              alt=""
              src="/uphonepause.svg"
            />
            <div className={styles.div3}>16910</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinBangladeshLearningPlatform;
