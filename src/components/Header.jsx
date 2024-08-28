import React from "react";
import TextL from "@/components/elements/TextL";
import Link from "next/link";
import Container from "@/components/elements/Container";
import Wrapper from "@/components/elements/Wrapper";

const Header = () => {
  return (
    <Wrapper className="bg-HeaderBg position sticky top-0 z-10 flex justify-center">
      <Container className="py-3 flex items-center justify-center">
        <div className="flex justify-between w-1/2 text-TextColor">
          <TextL className="font-semibold">
            <Link href="/">Home</Link>
          </TextL>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
