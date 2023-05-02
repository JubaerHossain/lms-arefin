import type { NextPage } from "next";

type CourseContainerType = {
  courseSectionInstructions?: string;
};

const CourseContainer: NextPage<CourseContainerType> = ({
  courseSectionInstructions,
}) => {
  return (
    <div className="relative w-[432px] h-[329px] shrink-0 text-justify text-base text-p2a-color-text-c3 font-p2a-text-sub-title-1-18px">
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-p2a-color-text-or-01 box-border w-[432px] flex flex-col p-12 items-center justify-center border-[1px] border-solid border-stock-2">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <img className="relative w-6 h-[19px] shrink-0" alt="" src="/.svg" />
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="relative leading-[25px] capitalize inline-block w-[374.82px] h-[125px] shrink-0">
              {courseSectionInstructions}
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px] text-lg text-p2a-color-text-c2">
              <img
                className="relative w-[61px] h-[61px] shrink-0 object-cover"
                alt=""
                src="/ellipse-2840@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[28px] capitalize font-medium">
                  Esther Howard
                </div>
                <div className="relative text-sm capitalize text-main-color1">
                  CEO, Slack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
