import shoes1 from "@/assets/images/home/shoes1.jpg";
import shoes2 from "@/assets/images/home/shoes2.jpg";
import shoes3 from "@/assets/images/home/shoes3.jpg";
import shoes4 from "@/assets/images/home/shoes4.jpg";
import shoes5 from "@/assets/images/home/shoes5.jpg";
import shoes1_1 from "@/assets/images/gallery/shoes1/shoes1_1.jpeg";
import shoes1_2 from "@/assets/images/gallery/shoes1/shoes1_2.jpeg";
import shoes1_3 from "@/assets/images/gallery/shoes1/shoes1_3.jpeg";
import shoes1_4 from "@/assets/images/gallery/shoes1/shoes1_4.jpeg";
import shoes2_1 from "@/assets/images/gallery/shoes2/shoes2_1.jpeg";
import shoes2_2 from "@/assets/images/gallery/shoes2/shoes2_2.jpeg";
import shoes2_3 from "@/assets/images/gallery/shoes2/shoes2_3.jpeg";
import shoes3_1 from "@/assets/images/gallery/shoes3/shoes3_1.jpeg";
import shoes3_2 from "@/assets/images/gallery/shoes3/shoes3_2.jpeg";
import shoes3_3 from "@/assets/images/gallery/shoes3/shoes3_3.jpeg";
import shoes3_4 from "@/assets/images/gallery/shoes3/shoes3_4.jpeg";
import shoes3_5 from "@/assets/images/gallery/shoes3/shoes3_5.jpeg";
import shoes3_6 from "@/assets/images/gallery/shoes3/shoes3_6.jpeg";
import WhatsApp from "@/assets/images/WhatsApp.svg";

export const shoesData = [
  {
    image: shoes1,
    mrp: "3,199",
    price: "1,349",
    type: "Unisex's Sneakers",
    sizes: "7,8,9,10",
    urls: [
      {
        text: "Buy now",
        key: "whatsapp",
        url: "https://wa.me/p/9541318769240665/919872078281",
        icon: <WhatsApp className="w-6 h-6 mr-1" />,
      },
    ],
  },
  {
    image: shoes2,
    mrp: "3,199",
    price: "1,349",
    type: "Unisex's Sneakers",
    sizes: "7,8,9,10",
    urls: [
      {
        text: "Buy now",
        key: "whatsapp",
        url: "https://wa.me/p/9214559198581994/919872078281",
        icon: <WhatsApp className="w-6 h-6 mr-1" />,
      },
    ],
  },
  {
    image: shoes3,
    mrp: "3,349",
    price: "1,649",
    type: "Casual Sports Shoes",
    sizes: "7,8,9,10",
    urls: [
      {
        text: "Buy now",
        key: "whatsapp",
        url: "https://wa.me/p/23933832479540393/919872078281",
        icon: <WhatsApp className="w-6 h-6 mr-1" />,
      },
    ],
  },
  // {
  //   image: shoes4,
  //   mrp: "1,400",
  //   price: "800",
  //   type: "Unisex's Sneakers",
  //   sizes: "7,8,9",
  //   urls: [
  //     {
  //       text: "Amazon",
  //       key: "amazon",
  //       url: "#",
  //     },
  //     {
  //       text: "Flipkart",
  //       key: "flipkart",
  //       url: "#",
  //     },
  //   ],
  // },
  // {
  //   image: shoes5,
  //   mrp: "1,400",
  //   price: "800",
  //   type: "Unisex's Sneakers",
  //   sizes: "7,8,9",
  //   urls: [
  //     {
  //       text: "Amazon",
  //       key: "amazon",
  //       url: "#",
  //     },
  //     {
  //       text: "Flipkart",
  //       key: "flipkart",
  //       url: "#",
  //     },
  //   ],
  // },
];

export const galleryData = [
  [shoes1_1, shoes1_2, shoes1_3, shoes1_4],
  [shoes2_1, shoes2_2, shoes2_3],
  [shoes3_1, shoes3_2, shoes3_3, shoes3_4, shoes3_5, shoes3_6],
];
