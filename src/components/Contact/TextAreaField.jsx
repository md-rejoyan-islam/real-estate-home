import PropTypes from "prop-types";

export default function TextAreaField({ id, placeholder, name }) {
  return (
    <textarea
      name={name}
      id={id}
      rows={1}
      placeholder={placeholder}
      className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      defaultValue={""}
    />
  );
}

TextAreaField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
