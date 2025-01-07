import React from "react";
import TextL from "@/components/elements/TextL";
import Link from "next/link";
import Container from "@/components/elements/Container";
import Wrapper from "@/components/elements/Wrapper";
import WhatsApp from "@/assets/images/WhatsApp.svg";
import Text from "./elements/Text";
import TextS from "./elements/TextS";
import { whatsappUrl } from "@/utils/constants";

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
              href={whatsappUrl}
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
