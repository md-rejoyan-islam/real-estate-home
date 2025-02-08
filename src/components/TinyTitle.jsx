import PropTypes from "prop-types";
export default function TinyTitle({ style, label }) {
  return (
    <span className={`${style} mb-2 block text-lg font-semibold text-primary`}>
      {label}
    </span>
  );
}

TinyTitle.propTypes = {
  style: PropTypes.string,
  label: PropTypes.string,
};
