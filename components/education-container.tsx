import type { NextPage } from "next";
import CourseContainer from "./course-container";
import styles from "./education-container.module.css";
const EducationContainer: NextPage = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div}>
        <p className={styles.p}>কেন আমরাই শিক্ষার্থী ও</p>
        <p className={styles.p}>অভিভাবকগণের প্রথম পছন্দ?</p>
      </div>
      <div className={styles.groupParent}>
        <CourseContainer courseSectionInstructions="কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো লেগেছে “Writing Part”।" />
        <CourseContainer courseSectionInstructions="অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।" />
        <CourseContainer courseSectionInstructions="আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো শিখতে পেরেছি।" />
      </div>
    </div>
  );
};

export default EducationContainer;
