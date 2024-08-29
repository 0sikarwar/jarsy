import React from "react";
import TextL from "@/components/elements/TextL";
import Link from "next/link";
import Container from "@/components/elements/Container";
import Wrapper from "@/components/elements/Wrapper";
import WhatsApp from "@/assets/images/WhatsApp.svg";
import Text from "./elements/Text";
import TextS from "./elements/TextS";

const Header = () => {
  return (
    <Wrapper className="bg-HeaderBg position sticky top-0 z-10 flex justify-center">
      <Container className="py-3 flex items-center justify-center">
        <div className="flex justify-center gap-6 md:w-1/2 w-full px-3 text-TextColor">
          <TextL className="font-semibold tracking-wider hover:opacity-70">
            <Link href="/">JARSY</Link>
          </TextL>
          <Text className="hover:opacity-70">
            <Link href="#explore">Explore Items</Link>
          </Text>
          <TextS className="font-semibold hover:opacity-70">
            <a
              href="https://wa.me/918283844494?text=Hello,%20I%20am%20interested%20in%20learning%20more%20about%20JARSY%20shoes.%20Could%20you%20please%20provide%20more%20information?"
              className="flex items-center text-green-500"
              target="_blank"
            >
              <WhatsApp className="w-6 h-6 mr-2" />
              Chat with us
            </a>
          </TextS>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
