import Image from "next/image";
import React from "react";
import Container from "@/components/elements/Container";
import Heading from "@/components/elements/Heading";
import TextL from "@/components/elements/TextL";
import Wrapper from "@/components/elements/Wrapper";
import SubHeading from "@/components/elements/SubHeading";

const FeatureWidget = ({
  dir = "ltr",
  color = "#fef0ff",
  wrapperClass = "",
  img,
  title = "",
  subHeading = "",
  desc = "",
}) => {
  return (
    <Wrapper className={`relative ${wrapperClass}`}>
      <div
        className="w-full h-[400px] absolute bottom-0 md:bottom-auto md:top-1/2 md:transform md:-translate-y-1/2"
        style={{ backgroundColor: color }}
      />
      <Container
        className={`flex mt-4 gap-8 z-[1] flex-col relative px-6 ${
          dir !== "ltr" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="h-auto w-4/5 m-auto md:md-0 md:h-[600px] md:w-auto max-w-[600px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <Image src={img} alt="" />
        </div>
        <div className="flex flex-col justify-center leading-normal align-center w-4/5 md:w-1/2 m-auto md:m-0">
          <div className="">
            <Heading className="tracking-wider leading-normal my-4">
              {title}
            </Heading>
            <SubHeading className="tracking-wider leading-normal my-2">
              {subHeading}
            </SubHeading>
            <TextL className="leading-normal mt:2 md:mt-4 md:w-4/5 mb-10 md:mb-0">
              {desc}
            </TextL>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default FeatureWidget;
