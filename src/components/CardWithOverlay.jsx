import Image from "next/image";
import React from "react";
import Text from "./elements/Text";
import Text2Xl from "./elements/Text2Xl";

const CardWithOverlay = ({ image, mrp, price, type, sizes, urls, onClick }) => {
  return (
    <div className="h-[440px] my-4 w-[380px] rounded-md shadow-lg overflow-hidden relative">
      <Image
        src={image}
        className="w-full h-full"
        style={{ objectFit: "cover" }}
      />
      <div
        className="w-full h-full bg-black flex items-center justify-center z-[1] absolute top-0 cursor-pointer opacity-0 hover:opacity-70 transition-opacity duration-700"
        onClick={onClick}
      >
        <Text className="text-white font-semibold">View Images</Text>
      </div>
      <div className="w-full flex flex-col items-center bg-black text-white bg-opacity-50 absolute bottom-0 shadow-lg h-fit py-2 z-[2]">
        <div className="flex items-end justify-center">
          {mrp && (
            <Text className="mr-2 line-through text-red-500">₹{mrp}</Text>
          )}
          <Text2Xl className="font-semibold text-green-400">₹{price}</Text2Xl>
        </div>
        <Text className="">
          {type} (Sizes: {sizes})
        </Text>
        <Text className="align-middle">
          {urls.map(({ text, key, url }, index) => {
            let colorClass = "";
            switch (key) {
              case "amazon":
                colorClass = "text-amazonColor";
                break;
              case "flipkart":
                colorClass = "text-flipkartColor";
                break;
            }
            return (
              <React.Fragment key={index}>
                <a href={url} className={`${colorClass} hover:brightness-125`}>
                  {text}
                </a>
                {index < urls.length - 1 && (
                  <span className="mx-1 opacity-70">|</span>
                )}
              </React.Fragment>
            );
          })}
        </Text>
      </div>
    </div>
  );
};

export default CardWithOverlay;
