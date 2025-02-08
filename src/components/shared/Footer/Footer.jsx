import FooterAboutUs from "./FooterAboutUs";
import FooterBlogs from "./FooterBlogs";
import FooterFeatures from "./FooterFeatures";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  const links = {
    about: [
      {
        id: 1,
        name: "Home",
        href: "#home",
      },
      {
        id: 2,
        name: "Features",
        href: "#features",
      },
      {
        id: 3,
        name: "About",
        href: "#about",
      },
    ],
    features: [
      {
        id: 1,
        name: "How it works",
        href: "#",
      },
      {
        id: 2,
        name: "Privacy policy",
        href: "#",
      },
      {
        id: 3,
        name: "Terms of Service",
        href: "#",
      },
      {
        id: 4,
        name: "Refund policy",
        href: "#",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "I think really important to design with...",
        image: "./assets/images/blog/blog-footer-01.jpg",
        href: "blog-details.html",
      },
      {
        id: 2,
        title: "Recognizing the need is the primary...",
        image: "./assets/images/blog/blog-footer-02.jpg",
        href: "blog-details.html",
      },
    ],
    socials: [
      {
        id: 1,
        name: "facebook",
        link: "#",
        icon: "facebook",
      },
      {
        id: 2,
        name: "twitter",
        link: "#",
        icon: "twitter",
      },
      {
        id: 3,
        name: "Instagram",
        link: "#",
        icon: "instagram",
      },
      {
        id: 4,
        name: "linkedin",
        link: "#",
        icon: "linkedin",
      },
    ],
  };

  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <FooterSocials links={links?.socials} />
          <FooterAboutUs links={links?.about} />
          <FooterFeatures links={links?.features} />
          <FooterBlogs links={links?.blogs} />
        </div>
      </div>
    </footer>
  );
}
