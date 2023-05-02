import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./student-container.module.css";

type StudentContainerType = {
  totalStudentsAndAppUsersT?: string;
  totalStudentsAndAppUsersT2?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const StudentContainer: NextPage<StudentContainerType> = ({
  totalStudentsAndAppUsersT,
  totalStudentsAndAppUsersT2,
  propBackgroundColor,
}) => {
  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.frameWrapper} style={frameDiv3Style}>
      <div className={styles.parent}>
        <div className={styles.div}>{totalStudentsAndAppUsersT}</div>
        <div className={styles.div1}>{totalStudentsAndAppUsersT2}</div>
      </div>
    </div>
  );
};

export default StudentContainer;
