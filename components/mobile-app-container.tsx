import type { NextPage } from "next";
import styles from "./mobile-app-container.module.css";
const MobileAppContainer: NextPage = () => {
  return (
    <div className={styles.mainContainerInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.image204Parent}>
              <img
                className={styles.image204Icon}
                alt=""
                src="/image-204@2x.png"
              />
              <div className={styles.div}>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.pngegg11Parent}>
                <img
                  className={styles.pngegg11}
                  alt=""
                  src="/pngegg-1-1@2x.png"
                />
                <div className={styles.downloadOnTheParent}>
                  <b className={styles.downloadOnThe}>Download on the</b>
                  <b className={styles.appStore}>App Store</b>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.getItOnParent}>
                  <b className={styles.getItOn}>GET IT ON</b>
                  <b className={styles.appStore1}>App Store</b>
                </div>
                <img
                  className={styles.image1Icon}
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.parent}>
              <div className={styles.div}>কোম্পানি</div>
              <div className={styles.div2}>
                <p className={styles.p}>ক্যারিয়ার</p>
                <p className={styles.p}>শিক্ষক হিসেবে জয়েন করুন</p>
                <p className={styles.p}>প্রাইভেসি পলিসি</p>
                <p className={styles.p}>অ্যাফিলিয়েট হতে চাইলে</p>
                <p className={styles.p}>রিফান্ড পলিসি</p>
                <p className={styles.p}>ফ্রি ডাউনলোড</p>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>অন্যান্য</div>
              <div className={styles.div4}>
                <p className={styles.p}>ব্লগ</p>
                <p className={styles.p}>বুক স্টোর</p>
                <p className={styles.p}>নোটস এবং গাইডস</p>
                <p className={styles.p}>অফার সমূহ</p>
                <p className={styles.p}>ক্র্যাশ কোর্স</p>
                <p className={styles.p}>ভেরিফাই সার্টিফিকেট</p>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent}>
                <div className={styles.div}>আমাদের যোগাযোগ মাধ্যম</div>
                <div className={styles.contact8801609986928Container}>
                  <p className={styles.p}>
                    <span className={styles.contact}>{`Contact - `}</span>
                    <span>+8801609-986928</span>
                  </p>
                  <p className={styles.p}>
                    <span className={styles.contact}>{`SMS - `}</span>
                    <span>Help to 26969 (24X7)</span>
                  </p>
                  <p className={styles.p}>
                    <span className={styles.contact}>{`Email - `}</span>
                    <span>admin@p2abd.com</span>
                  </p>
                </div>
              </div>
              <div className={styles.social}>
                <img className={styles.icon} alt="" src="/1.svg" />
                <img className={styles.icon} alt="" src="/5.svg" />
                <img className={styles.icon} alt="" src="/2.svg" />
                <img className={styles.icon} alt="" src="/4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.p2a}>
          স্বত্ব © ২০১৫ - ২০২৩ P2A কর্তৃক সর্বস্বত্ব সংরক্ষিত
        </div>
      </div>
    </div>
  );
};

export default MobileAppContainer;
