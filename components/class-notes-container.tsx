import type { NextPage } from "next";
import styles from "./class-notes-container.module.css";
const ClassNotesContainer: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.freeDownloadsParent}>
          <div className={styles.freeDownloadsContainer}>
            <p className={styles.p}>সেরা শিক্ষকের তৈরি ক্লাস নোট এবং</p>
            <p className={styles.p}>লেকচার শিট ডাউনলোড করতে</p>
            <p className={styles.p}>এক্সপ্লোর করুন “Free Downloads”</p>
            <p className={styles.p}>সেকশন</p>
          </div>
          <div className={styles.fidownloadParent}>
            <img
              className={styles.fidownloadIcon}
              alt=""
              src="/fidownload.svg"
            />
            <div className={styles.div}>ফ্রি ডাউনলোড</div>
          </div>
        </div>
        <img className={styles.image232Icon} alt="" src="/image-232@2x.png" />
      </div>
    </div>
  );
};

export default ClassNotesContainer;
