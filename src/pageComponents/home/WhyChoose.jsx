import Container from "@/components/elements/Container";
import SubHeading from "@/components/elements/SubHeading";
import Wrapper from "@/components/elements/Wrapper";
import CheckWithCircle from "@/assets/images/checkWithCircle.svg";
import React from "react";
import TextXl from "@/components/elements/TextXl";
import Heading from "@/components/elements/Heading";
import TextL from "@/components/elements/TextL";
import Text from "@/components/elements/Text";

const WhyChooseSection = () => {
  const benefits = [
    {
      title: "Indian Craftsmanship",
      description:
        "Premium quality footwear handcrafted by skilled Indian artisans",
    },
    {
      title: "Superior Comfort",
      description:
        "Advanced ergonomic design with cushioned support for all-day wear",
    },
    {
      title: "Modern Style",
      description: "Contemporary designs that blend fashion with functionality",
    },
    {
      title: "Sustainable Choice",
      description:
        "Ethically sourced materials and sustainable manufacturing practices",
    },
  ];

  return (
    <Wrapper className="bg-gray-50 py-16 mt-10">
      <Container className="px-4">
        <div className="text-center mb-12">
          <Heading className="!text-2xl text-gray-700 mb-4">
            Why Choose JARSY?
          </Heading>
          <TextL className=" text-gray-600 max-w-3xl mx-auto">
            At JARSY, we're not just crafting shoes – we're revolutionizing
            Indian footwear with passion and purpose. Our commitment to
            excellence shines through every pair we create.
          </TextL>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CheckWithCircle />
                </div>
                <SubHeading className="!text-lg font-semibold mb-2 text-gray-700">
                  {benefit.title}
                </SubHeading>
                <Text className="text-gray-600">{benefit.description}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Text className="text-gray-700 max-w-3xl mx-auto">
            When you choose JARSY, you're not just wearing shoes – you're
            stepping into a legacy of Indian excellence, supporting local
            craftsmanship, and making a statement about sustainable, ethical
            fashion. Experience the perfect blend of comfort, style, and pride
            with every step you take in JARSY shoes.
          </Text>
        </div>
      </Container>
    </Wrapper>
  );
};

export default WhyChooseSection;
