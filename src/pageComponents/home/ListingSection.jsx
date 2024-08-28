import CardWithOverlay from "@/components/CardWithOverlay";
import Carousel from "@/components/Crousel";
import Modal from "@/components/Modal";
import Container from "@/components/elements/Container";
import Heading from "@/components/elements/Heading";
import { galleryData, shoesData } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
import Cross from "@/assets/images/cross.svg";

const ListingSection = () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const [imageIndex, setImageIndex] = useState(-1);
  const [showSlider, setShowSlider] = useState(false);
  const handleImageClick = (index) => {
    setImageIndex(index);
    setShowSlider(true);
  };

  const handleSliderClose = () => {
    setShowSlider(false);
  };
  return (
    <Container>
      <Heading className="text-center">
        Shop by Style: JARSY Shoes and Sneakers
      </Heading>
      {shoesData.map((item, index) => {
        return (
          <CardWithOverlay
            {...item}
            key={index}
            onClick={() => setSelectedCard(index)}
          />
        );
      })}
      <Modal isOpen={selectedCard !== -1} onClose={() => setSelectedCard(-1)}>
        <div className="relative w-[50vw] h-[70vh] max-h-[600px] overflow-hidden">
          {selectedCard !== -1 && (
            <>
              <div className="w-full h-full flex gap-3 flex-wrap justify-center pt-12 pb-4 overflow-scroll">
                {galleryData[selectedCard].map((image, index) => {
                  return (
                    <Image
                      src={image}
                      alt=""
                      className="w-[280px] h-80 rounded-md border-[0.5px] hover:shadow-xl hover:scale-[1.02] transition-transform duration-00 border-gray-300 cursor-pointer"
                      style={{ objectFit: "cover" }}
                      key={index}
                      onClick={() => handleImageClick(index)}
                    />
                  );
                })}
              </div>
              <div
                className={`w-full h-full absolute top-0 ${
                  showSlider
                    ? "z-10 opacity-100 scale-1"
                    : "opacity-0 z-[-1] scale-0"
                } transition-all duration-700 `}
              >
                <div className="flex justify-end p-2 absolute right-1 top-1 z-[2]">
                  <button
                    onClick={handleSliderClose}
                    type="button"
                    className="text-gray-400 bg-transparent hover:brightness-50 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  >
                    <Cross className="w-5 h-5" />
                  </button>
                </div>
                <Carousel startIndex={imageIndex}>
                  <div className="flex w-full h-full">
                    {galleryData[selectedCard].map((image, index) => {
                      return (
                        <div
                          className="min-w-full flex-[0_0_100.5%]"
                          key={index}
                        >
                          <Image
                            src={image}
                            alt=""
                            className="w-full h-full"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </Carousel>
              </div>
            </>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default ListingSection;
