import FeatureWidget from "@/pageComponents/home/FeatureWidget";
import HeroSection from "@/pageComponents/home/HeroSection";
import featureWidget1 from "@/assets/images/home/featureWidget1.png";
import featureWidget2 from "@/assets/images/home/featureWidget2.png";
import ListingSection from "@/pageComponents/home/ListingSection";
import WhyChoose from "@/pageComponents/home/WhyChoose";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureWidget
        img={featureWidget1}
        title="Comfort Redefined"
        desc="Proudly made in India, JARSY brings you stylish, ergonomic footwear for unmatched comfort and support. Our premium shoes and sneakers feature cushioned soles for all-day wear and durability. Designed for both fashion and function, JARSY keeps you looking great on every step. Choose JARSY for a perfect balance of style and comfort."
        subHeading="Step into Ultimate Comfort with JARSY Shoes and Sneakers"
      />
      <FeatureWidget
        dir="rtl"
        img={featureWidget2}
        color="#fff2e6"
        wrapperClass="md:mt-[-20px]"
        title="Style that Speaks"
        desc="JARSY shoes and sneakers offer the perfect blend of style, comfort, and craftsmanship. Designed for versatility, our premium footwear enhances any outfit with superior quality and modern designs. Crafted for all-day wear, JARSY combines cushioned soles with lasting durability. Elevate your everyday style with JARSY’s innovative footwear."
        subHeading="Experience Elegant Style with JARSY Shoes and Sneakers"
      />
      <ListingSection />
      <WhyChoose />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
