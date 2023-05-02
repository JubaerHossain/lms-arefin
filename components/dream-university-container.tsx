import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type DreamUniversityContainerType = {
  prop?: string;
  prop1?: string;
  prop2?: string;
  rectangle14?: string;
  aUnit?: string;
  rectangle141?: string;
  aUnit1?: string;
  rectangle142?: string;
  aUnit2?: string;
  rectangle143?: string;
  aUnit3?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const DreamUniversityContainer: NextPage<DreamUniversityContainerType> = ({
  prop,
  prop1,
  prop2,
  rectangle14,
  aUnit,
  rectangle141,
  aUnit1,
  rectangle142,
  aUnit2,
  rectangle143,
  aUnit3,
  propBackgroundColor,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="bg-ghostwhite flex flex-col py-[120px] px-12 items-center justify-center text-left text-lg text-main-color1 font-p2a-text-sub-title-1-18px"
      style={frameDiv1Style}
    >
      <div className="flex flex-col items-center justify-start gap-[80px]">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="relative leading-[20px] font-medium">{prop}</div>
            <div className="relative text-25xl leading-[56px] font-semibold text-p2a-color-text-c1">
              {prop1}
            </div>
            <div className="relative leading-[28px] font-medium text-p2a-color-text-c3">
              {prop2}
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[24px] text-p2a-color-text-c2">
            <div className="relative rounded-md bg-p2a-color-text-or-01 box-border w-[318px] h-[296px] shrink-0 overflow-hidden border-[1px] border-solid border-gainsboro">
              <img
                className="absolute top-[0px] left-[0px] w-[318px] h-[151px] object-cover"
                alt=""
                src={rectangle14}
              />
              <div className="absolute top-[168px] left-[14px] flex flex-col items-start justify-start gap-[32px]">
                <div className="relative leading-[28px] font-semibold inline-block w-[244px] h-14 shrink-0">
                  {aUnit}
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-main-color1">
                  <div className="relative leading-[20px] font-medium">
                    বিস্তারিত
                  </div>
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-md bg-p2a-color-text-or-01 box-border w-[318px] h-[296px] shrink-0 overflow-hidden border-[1px] border-solid border-gainsboro">
              <img
                className="absolute top-[0px] left-[0px] w-[318px] h-[151px] object-cover"
                alt=""
                src={rectangle141}
              />
              <div className="absolute top-[168px] left-[14px] flex flex-col items-start justify-start gap-[32px]">
                <div className="relative leading-[28px] font-semibold inline-block w-[244px] h-14 shrink-0">
                  {aUnit1}
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-main-color1">
                  <div className="relative leading-[20px] font-medium">
                    বিস্তারিত
                  </div>
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-md bg-p2a-color-text-or-01 box-border w-[318px] h-[296px] shrink-0 overflow-hidden border-[1px] border-solid border-gainsboro">
              <img
                className="absolute top-[0px] left-[0px] w-[318px] h-[151px] object-cover"
                alt=""
                src={rectangle142}
              />
              <div className="absolute top-[168px] left-[14px] flex flex-col items-start justify-start gap-[32px]">
                <div className="relative leading-[28px] font-semibold inline-block w-[244px] h-14 shrink-0">
                  {aUnit2}
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-main-color1">
                  <div className="relative leading-[20px] font-medium">
                    বিস্তারিত
                  </div>
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-md bg-p2a-color-text-or-01 box-border w-[318px] h-[296px] shrink-0 overflow-hidden border-[1px] border-solid border-gainsboro">
              <img
                className="absolute top-[0px] left-[0px] w-[318px] h-[151px] object-cover"
                alt=""
                src={rectangle143}
              />
              <div className="absolute top-[168px] left-[14px] flex flex-col items-start justify-start gap-[32px]">
                <div className="relative leading-[28px] font-semibold inline-block w-[244px] h-14 shrink-0">
                  {aUnit3}
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-main-color1">
                  <div className="relative leading-[20px] font-medium">
                    বিস্তারিত
                  </div>
                  <img
                    className="relative w-5 h-5 shrink-0 overflow-hidden"
                    alt=""
                    src="/uarrowright1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-main-color1 h-11 shrink-0 flex flex-row py-[12.5px] px-6 box-border items-center justify-center gap-[8px] text-base text-p2a-color-text-or-01">
          <div className="relative tracking-[0.02em] leading-[20px] font-medium">
            সকল কোর্স
          </div>
          <img
            className="relative w-5 h-5 shrink-0 overflow-hidden"
            alt=""
            src="/systemlinearrowdroprightline1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DreamUniversityContainer;
