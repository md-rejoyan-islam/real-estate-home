import PropTypes from "prop-types";
import {
  IconFacebook,
  IconImageBackShape,
  IconInstagram,
  IconTwitter,
} from "../Icons";

export default function TeamMember({ member }) {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4" key={member}>
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <img
            src={member?.image}
            alt={member?.name}
            className="h-[120px] w-[120px] rounded-full"
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100" />
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            <IconImageBackShape width={55} height={53} />
          </span>
        </div>
        <div className="text-center">
          <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
            {member?.name}
          </h4>
          <p className="mb-5 text-sm text-body-color dark:text-dark-6">
            {member?.designation}
          </p>
          <div className="flex items-center justify-center gap-5">
            {member?.socials?.map((social) => (
              <a
                href={social?.link}
                className="text-dark-6 hover:text-primary"
                key={social?.id}
              >
                {social?.icon === "facebook" && (
                  <IconFacebook width={18} height={18} />
                )}
                {social?.icon === "twitter" && (
                  <IconTwitter width={18} height={18} />
                )}
                {social?.icon === "instagram" && (
                  <IconInstagram width={18} height={18} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  member: PropTypes.object,
};
