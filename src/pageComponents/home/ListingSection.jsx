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
    <Container className="pt-14" id="explore">
      <Heading className="text-center">
        Shop by Style: JARSY Shoes and Sneakers
      </Heading>
      <div className="flex flex-wrap gap-3 mx-auto max-w-[1180px] w-full justify-center mt-10">
        {shoesData.map((item, index) => {
          return (
            <CardWithOverlay
              {...item}
              key={index}
              onClick={() => setSelectedCard(index)}
            />
          );
        })}
        <div className="invisible w-64 md:w-[380px] " />
      </div>
      <Modal isOpen={selectedCard !== -1} onClose={() => setSelectedCard(-1)}>
        <div className="relative w-full md:w-[50vw] min-h-96 max-h-[70vh] md:max-h-[600px] overflow-x-scroll">
          {selectedCard !== -1 && (
            <>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 pb-4 overflow-scroll px-2">
                {galleryData[selectedCard].map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="aspect-square relative overflow-hidden rounded-md"
                    >
                      <Image
                        src={image}
                        alt={shoesData[selectedCard].type}
                        className="w-full h-full rounded-md border-[0.5px] hover:shadow-xl hover:scale-[1.02] transition-transform duration-00 border-gray-300 cursor-pointer"
                        style={{ objectFit: "cover" }}
                        key={index}
                        onClick={() => handleImageClick(index)}
                        title={shoesData[selectedCard].type}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className={`w-full h-full absolute top-0 bg-white bg-opacity-80 ${
                  showSlider
                    ? "z-10 opacity-100 visible"
                    : "opacity-0 z-[-1] invisible"
                } transition-all duration-700`}
              >
                <div className="flex justify-end p-2 absolute right-1 top-1 z-[2]">
                  <button
                    onClick={handleSliderClose}
                    type="button"
                    className="text-red-600 bg-transparent hover:brightness-50 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  >
                    <Cross className="w-5 h-5" />
                  </button>
                </div>
                <div
                  className={`w-full h-full ${
                    showSlider ? "scale-1" : "scale-0"
                  } transition-transform duration-700`}
                >
                  <Carousel startIndex={imageIndex} hideDots>
                    <div className="flex w-full h-full">
                      {galleryData[selectedCard].map((image, index) => {
                        return (
                          <div
                            className="min-w-full flex-[0_0_100.5%]"
                            key={index}
                          >
                            <Image
                              src={image}
                              alt={shoesData[selectedCard].type}
                              className="w-full h-full"
                              style={{ objectFit: "contain" }}
                              title={shoesData[selectedCard].type}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Carousel>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default ListingSection;
