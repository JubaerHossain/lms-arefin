import type { NextPage } from "next";
import Container10thGrade from "./container10th-grade";
import styles from "./admission-container.module.css";
const AdmissionContainer: NextPage = () => {
  return (
    <div className={styles.mainContainerInner}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>
                ২০২৩ সালের অনলাইন ব্যাচে ভর্তি চলছে!
              </div>
              <div className={styles.div1}>
                শ্রেণি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং
                নিয়মিত পরীক্ষার সুবিধা
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <Container10thGrade />
                <Container10thGrade />
                <Container10thGrade />
                <Container10thGrade />
                <Container10thGrade />
              </div>
              <div className={styles.group}>
                <div className={styles.div2}>
                  অনলাইন ব্যাচ সম্পর্কে আরও জানুন
                </div>
                <img
                  className={styles.systemLinearrowDropRightLIcon}
                  alt=""
                  src="/systemlinearrowdroprightline2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.container}>
                <div className={styles.div3}>
                  <p className={styles.p}>
                    ১৬ থেকে ২৪ বছর বয়সী কলেজ ও বিশ্ববিদ্যালয়
                  </p>
                  <p className={styles.p}>
                    শিক্ষার্থীদের জন্য দেশের সর্ববৃহৎ ফাইন্যান্স অলিম্পিয়াড
                  </p>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.div2}>আরও জানুন</div>
                  <img
                    className={styles.systemLinearrowDropRightLIcon}
                    alt=""
                    src="/systemlinearrowdroprightline3.svg"
                  />
                </div>
              </div>
              <img
                className={styles.image214Icon}
                alt=""
                src="/image-214@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.parent}>
              <div className={styles.div}>নতুন বছর, নতুন স্কিলস</div>
              <div className={styles.div1}>
                নতুন বছর উপলক্ষ্যে টেন মিনিট স্কুলের বিভিন্ন কোর্স ও বান্ডেল
                পাওয়া যাবে আরো সাশ্রয়ে
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-6@2x.png"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-74@2x.png"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-8@2x.png"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-9@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionContainer;
