import shoes1 from "@/assets/images/home/shoes1.jpg";
import shoes1_1 from "@/assets/images/gallery/shoes1/shoes1_1.jpg";
import shoes1_2 from "@/assets/images/gallery/shoes1/shoes1_2.jpg";

export const shoesData = [
  {
    image: shoes1,
    mrp: "1,400",
    price: "800",
    type: "Unisex's Sneakers",
    sizes: "7,8,9",
    urls: [
      {
        text: "Amazon",
        key: "amazon",
        url: "#",
      },
      {
        text: "Flipkart",
        key: "flipkart",
        url: "#",
      },
    ],
  },
];

export const galleryData = [
  [shoes1_1, shoes1_2, shoes1_1, shoes1_2, shoes1_1, shoes1_2],
];
