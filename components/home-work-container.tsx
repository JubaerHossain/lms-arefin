import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./home-work-container.module.css";

type HomeWorkContainerType = {
  classSheetRecordedClassTe?: string;
  classSheetRecordedClassNa?: string;

  /** Style props */
  propTop?: Property.Top;
};

const HomeWorkContainer: NextPage<HomeWorkContainerType> = ({
  classSheetRecordedClassTe,
  classSheetRecordedClassNa,
  propTop,
}) => {
  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.mainContainerInner} style={frameDiv2Style}>
      <div className={styles.image231Parent}>
        <img
          className={styles.image231Icon}
          alt=""
          src={classSheetRecordedClassTe}
        />
        <div className={styles.div}>{classSheetRecordedClassNa}</div>
      </div>
    </div>
  );
};

export default HomeWorkContainer;
