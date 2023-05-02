import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type LanguageLearningCoursesContainType = {
  courseBundleText?: string;

  /** Style props */
  propWidth?: Property.Width;
};

const LanguageLearningCoursesContain: NextPage<
  LanguageLearningCoursesContainType
> = ({ courseBundleText, propWidth }) => {
  const languageLearningCoursesStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="rounded-lg bg-p2a-color-text-c1 flex flex-col py-[25px] px-[22px] items-center justify-center text-left text-lg text-p2a-color-text-or-01 font-p2a-text-sub-title-1-18px border-[1px] border-solid border-black">
      <div className="flex flex-col items-start justify-start gap-[9px]">
        <div
          className="relative leading-[28px] font-medium"
          style={languageLearningCoursesStyle}
        >
          {courseBundleText}
        </div>
        <div className="relative text-sm leading-[18px] text-p2a-color-text-or-02">
          9 Courses
        </div>
      </div>
    </div>
  );
};

export default LanguageLearningCoursesContain;
