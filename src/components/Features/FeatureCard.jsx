import PropTypes from "prop-types";
import { IconBox } from "../Icons";

export default function FeatureCard({ feature }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4" key={feature.id}>
      <div className="group mb-12">
        <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
          <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
          <IconBox />
        </div>
        <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {feature?.title}
        </h4>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
          {feature?.description}
        </p>
        <a
          href={feature?.link}
          className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};
