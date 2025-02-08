import PropTypes from "prop-types";
export default function SubTitle({ style, label, children }) {
  return (
    <h2
      className={`${style} mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]`}
    >
      {label}
      {children}
    </h2>
  );
}

SubTitle.propTypes = {
  style: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};
