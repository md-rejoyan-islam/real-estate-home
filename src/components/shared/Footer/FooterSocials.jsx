import PropTypes from "prop-types";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "../../Icons";

export default function FooterSocials({ links }) {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <a href="/" className="mb-6 inline-block max-h-[100px]">
          <img
            src="assets/images/logo/logo.png"
            alt="logo"
            className="max-w-[80px] w-full"
          />
        </a>
        <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
          We create digital experiences for brands and companies by using
          technology.
        </p>
        <div className="-mx-3 flex items-center">
          {links?.map((social) => (
            <a
              key={social?.id}
              href={social?.link}
              className="px-3 text-gray-7 hover:text-white"
            >
              {social?.icon === "facebook" && (
                <IconFacebook width={22} height={22} />
              )}
              {social?.icon === "twitter" && (
                <IconTwitter width={22} height={22} />
              )}
              {social?.icon === "instagram" && (
                <IconInstagram width={22} height={22} />
              )}
              {social?.icon === "linkedin" && (
                <IconLinkedin width={22} height={22} />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

FooterSocials.propTypes = {
  links: PropTypes.array,
};
