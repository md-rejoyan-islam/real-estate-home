import LinkButton from "../LinkButton";

const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Pricing",
    href: "#pricing",
  },
  {
    id: 4,
    name: "Blog",
    href: "#blog",
  },
];

export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a href="/" className="navbar-logo block w-60 max-w-full px-4">
              <img
                src="assets/images/logo/logo.png"
                alt="logo"
                className="header-logo h-12"
              />
            </a>
            <ul className="hidden lg:flex">
              {navLinks?.map((link) => (
                <li className="group relative" key={link?.id}>
                  <LinkButton
                    href={link?.href}
                    label={link?.name}
                    style={
                      "ud-menu-scroll mx-10 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                    }
                  />
                </li>
              ))}
            </ul>
            <div className="sm:flex">
              <LinkButton
                href="signin.html"
                label={"Sign In"}
                style={
                  "flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                }
              />
              <LinkButton
                href="signup.html"
                label={"Sign Up"}
                style={
                  "signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
