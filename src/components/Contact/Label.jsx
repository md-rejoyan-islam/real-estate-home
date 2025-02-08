import PropTypes from "prop-types";

export default function Label({ htmlFor, label }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-4 block text-sm text-body-color dark:text-dark-6"
    >
      {label}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
};
