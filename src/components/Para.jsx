import PropTypes from "prop-types";

export default function Para({ style, label, children }) {
  return (
    <p className={`${[style]} text-base text-body-color dark:text-dark-6`}>
      {label}
      {children}
    </p>
  );
}

Para.propTypes = {
  style: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};
