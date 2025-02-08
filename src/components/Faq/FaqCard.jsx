import PropTypes from "prop-types";
import { IconQuestionMark } from "../Icons";

export default function FaqCard({ faq }) {
  return (
    <div className="mb-12 flex lg:mb-[70px]">
      <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
        <IconQuestionMark width={32} height={32} />
      </div>
      <div className="w-full">
        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {faq?.question}
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">
          {faq?.answer}
        </p>
      </div>
    </div>
  );
}

FaqCard.propTypes = {
  faq: PropTypes.object.isRequired,
};
