import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type HomeWorkContainerType = {
  image231?: string;
  prop?: string;

  /** Style props */
  propTop?: Property.Top;
};

const HomeWorkContainer: NextPage<HomeWorkContainerType> = ({
  image231,
  prop,
  propTop,
}) => {
  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[3012px] left-[49px] rounded-lg box-border w-[618px] flex flex-col p-6 items-start justify-center text-left text-xl text-p2a-color-text-c1 font-p2a-text-sub-title-1-18px border-[1px] border-solid border-gainsboro"
      style={frameDiv2Style}
    >
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative w-9 h-9 shrink-0 object-cover"
          alt=""
          src={image231}
        />
        <div className="relative leading-[24px] font-semibold">{prop}</div>
      </div>
    </div>
  );
};

export default HomeWorkContainer;
