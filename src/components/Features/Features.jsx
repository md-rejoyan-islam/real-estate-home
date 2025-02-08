import Para from "../Para";
import SubTitle from "../SubTitle";
import TinyTitle from "../TinyTitle";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Premium Property Listings",
      description:
        "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      link: "#",
    },
    {
      id: 2,
      title: "Personalized Property Matching",
      description:
        "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      link: "#",
    },
    {
      id: 3,
      title: "Expert Guidance and Support",
      description:
        "Benefit from the expertise of our dedicated team of real estate professionals.",
      link: "#",
    },
    {
      id: 4,
      title: "Virtual Tours",
      description:
        "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      link: "#",
    },
  ];

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <TinyTitle label={"Features"} />
              <SubTitle>Main Features Of Play</SubTitle>
              <Para>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.{" "}
              </Para>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features?.map((feature) => (
            <FeatureCard feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
