import FeatureWidget from "@/pageComponents/home/FeatureWidget";
import HeroSection from "@/pageComponents/home/HeroSection";
import featureWidget1 from "@/assets/images/home/featureWidget1.webp";
import featureWidget2 from "@/assets/images/home/featureWidget2.webp";
import ListingSection from "@/pageComponents/home/ListingSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureWidget
        img={featureWidget1}
        title="Comfort Redefined"
        desc="Proudly made in India, JARSY shoes and sneakers offer ergonomic designs and cushioned soles for all-day comfort."
        subHeading="Step into Ultimate Comfort with JARSY Shoes and Sneakers"
      />
      <FeatureWidget
        dir="rtl"
        img={featureWidget2}
        color="#fff2e6"
        wrapperClass="md:mt-[-100px]"
        title="Style that Speaks"
        desc="Crafted in India, JARSY shoes and sneakers combine fine craftsmanship with stylish design to complement any outfit."
        subHeading="Experience Elegant Style with JARSY Shoes and Sneakers"
      />
      <ListingSection />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
