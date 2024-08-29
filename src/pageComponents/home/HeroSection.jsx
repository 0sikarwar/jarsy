import Title from "@/components/elements/Title";
import heroImage from "@/assets/images/home/heroSection.jpeg";
import React from "react";
import Image from "next/image";
import Text2Xl from "@/components/elements/Text2Xl";
import Heading from "@/components/elements/Heading";
import Container from "@/components/elements/Container";
import Wrapper from "@/components/elements/Wrapper";

const HeroSection = () => {
  return (
    <Wrapper className="relative w-screen">
      <div className="absolute h-full w-full top-0 z-[1] before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-45">
        <Image src={heroImage} style={{ objectFit: "cover" }} alt="" fill />
      </div>
      <Container>
        <div className="flex justify-center w-full px-3 py-4 text-TextColor bg-HeaderBg text-center h-[480px] relative">
          <div className="w-full md:w-1/2 flex flex-col items-center z-[1] h-full justify-center">
            <Title className="tracking-wider">JARSY</Title>
            <Heading className="tracking-wider mb-4 mt-2">
              walk proud, walk <span className="text-orange-400">In</span>di
              <span className="text-green-500">an</span>
            </Heading>
            <Text2Xl className="font-semibold md:leading-normal tracking-wider">
              JARSY shoes are the perfect blend of{" "}
              <span className="text-[#d6b0e4]">comfort</span> and{" "}
              <span className="text-[#ff3c6d]">style</span>. Our shoes are
              designed & proudly{" "}
              <span className="text-sky-400">made in India</span> using{" "}
              <span className="text-[#ffc899]">high-quality</span> materials to
              help you walk with{" "}
              <span className="text-[#50c878]">confidence</span> and{" "}
              <span className="text-[#ffd700]">pride</span>. Shop our collection
              today and experience the JARSY{" "}
              <span className="text-[#7fff00]">difference</span>.
            </Text2Xl>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default HeroSection;
