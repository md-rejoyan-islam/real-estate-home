import PropTypes from "prop-types";
export default function InputField({ type, placeholder, name, id }) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
    />
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
