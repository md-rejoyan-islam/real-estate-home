import PropTypes from "prop-types";

export default function LinkButton({ style, href, label }) {
  return (
    <a href={href} className={style}>
      {label}
    </a>
  );
}

LinkButton.propTypes = {
  style: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
};
