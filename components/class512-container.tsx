import type { NextPage } from "next";

type Class512ContainerType = {
  image213?: string;
  prop?: string;
  prop1?: string;
  image2131?: string;
  prop2?: string;
  prop3?: string;
};

const Class512Container: NextPage<Class512ContainerType> = ({
  image213,
  prop,
  prop1,
  image2131,
  prop2,
  prop3,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[26px] text-left text-5xl text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px">
      <div className="rounded-lg bg-p2a-color-text-or-01 box-border w-[658px] h-40 shrink-0 flex flex-row py-[33px] px-8 items-center justify-between border-[1px] border-solid border-gainsboro">
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative w-[72px] h-[72px] shrink-0 object-cover"
            alt=""
            src={image213}
          />
          <div className="flex flex-col items-start justify-center gap-[6px]">
            <div className="relative leading-[22px] font-semibold">{prop}</div>
            <div className="relative text-lg leading-[22px] font-medium text-p2a-color-text-or-03-body-text text-center">
              {prop1}
            </div>
          </div>
        </div>
        <img
          className="relative w-6 h-6 shrink-0 overflow-hidden"
          alt=""
          src="/systemlinearrowdroprightline4.svg"
        />
      </div>
      <div className="rounded-lg bg-p2a-color-text-or-01 box-border w-[658px] h-40 shrink-0 flex flex-row py-[33px] px-8 items-center justify-between border-[1px] border-solid border-gainsboro">
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <img
            className="relative w-[72px] h-[72px] shrink-0 object-cover"
            alt=""
            src={image2131}
          />
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="relative leading-[22px] font-semibold">{prop2}</div>
            <div className="relative text-lg leading-[22px] font-medium text-p2a-color-text-or-03-body-text text-center">
              {prop3}
            </div>
          </div>
        </div>
        <img
          className="relative w-6 h-6 shrink-0 overflow-hidden"
          alt=""
          src="/systemlinearrowdroprightline4.svg"
        />
      </div>
    </div>
  );
};

export default Class512Container;
