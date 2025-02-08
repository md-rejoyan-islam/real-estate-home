import PropTypes from "prop-types";

export default function FooterFeatures({ links }) {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
        <ul>
          {links?.map((link) => (
            <li key={link?.id}>
              <a
                href={link?.href}
                className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
              >
                {link?.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

FooterFeatures.propTypes = {
  links: PropTypes.array,
};
