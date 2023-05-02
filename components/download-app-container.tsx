import type { NextPage } from "next";
import styles from "./download-app-container.module.css";
const DownloadAppContainer: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>
            <p className={styles.p}>ডাউনলোড করুন আমাদের</p>
            <p className={styles.p}>মোবাইল অ্যাপ, শেখা শুরু</p>
            <p className={styles.p}>করুন আজ থেকেই</p>
          </div>
          <div className={styles.googleplay1Parent}>
            <img
              className={styles.googleplay1Icon}
              alt=""
              src="/googleplay-1.svg"
            />
            <img
              className={styles.image235Icon}
              alt=""
              src="/image-235@2x.png"
            />
          </div>
        </div>
        <img className={styles.image234Icon} alt="" src="/image-234@2x.png" />
      </div>
    </div>
  );
};

export default DownloadAppContainer;
