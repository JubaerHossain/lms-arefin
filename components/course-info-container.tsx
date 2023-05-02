import type { NextPage } from "next";

type CourseInfoContainerType = {
  courseImageUrl?: string;
  courseName?: string;
};

const CourseInfoContainer: NextPage<CourseInfoContainerType> = ({
  courseImageUrl,
  courseName,
}) => {
  return (
    <div className="relative rounded-md bg-p2a-color-text-or-01 box-border w-[318px] h-[271px] shrink-0 overflow-hidden text-left text-lg text-p2a-color-text-c2 font-p2a-text-sub-title-1-18px border-[1px] border-solid border-gainsboro">
      <img
        className="absolute top-[0px] left-[0px] w-[318px] h-[151px] object-cover"
        alt=""
        src={courseImageUrl}
      />
      <div className="absolute top-[168px] left-[14px] flex flex-col items-start justify-start gap-[12px]">
        <div className="relative leading-[28px] font-semibold inline-block w-[244px] h-14 shrink-0">
          {courseName}
        </div>
        <div className="flex flex-row items-center justify-start text-base text-main-color1">
          <div className="relative leading-[20px] font-semibold">৳ 2000</div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoContainer;
