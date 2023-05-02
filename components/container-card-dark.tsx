import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type ContainerCardDarkType = {
  rectangle7?: string;
  iELTSCourseByMunzereenSha?: string;
  munzereenShahid?: string;

  /** Style props */
  propHeight?: Property.Height;
  propFlexShrink?: Property.FlexShrink;
};

const ContainerCardDark: NextPage<ContainerCardDarkType> = ({
  rectangle7,
  iELTSCourseByMunzereenSha,
  munzereenShahid,
  propHeight,
  propFlexShrink,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
    };
  }, [propHeight, propFlexShrink]);

  return (
    <div className="relative rounded-md bg-gray-100 w-[318px] h-[301px] shrink-0 overflow-hidden text-left text-lg text-p2a-color-text-or-01 font-p2a-text-sub-title-1-18px">
      <img
        className="absolute top-[0px] left-[0px] w-[318px] h-[146px] object-cover"
        alt=""
        src={rectangle7}
      />
      <div className="absolute top-[160px] left-[14px] h-[127px] flex flex-col items-start justify-start gap-[23px]">
        <div className="h-[84px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[28px] font-semibold inline-block w-[244px]">
            {iELTSCourseByMunzereenSha}
          </div>
          <div className="relative text-sm leading-[20px] text-slategray">
            {munzereenShahid}
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-start gap-[8px] text-sm text-main-color1"
          style={frameDivStyle}
        >
          <div className="relative leading-[20px] font-medium">বিস্তারিত</div>
          <img
            className="relative w-5 h-5 shrink-0 overflow-hidden"
            alt=""
            src="/uarrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCardDark;
