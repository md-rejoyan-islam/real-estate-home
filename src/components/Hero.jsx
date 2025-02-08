import { IconSquareGrid } from "./Icons";
import LinkButton from "./LinkButton";

export default function Hero() {
  return (
    <div
      id="#home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                We&apos;ll build house of your dream
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                We have 9000 more review and our customers trust on out property
                and quality products.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <LinkButton
                    label={"Book Now"}
                    href={"https://links.tailgrids.com/play-download"}
                    style="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  />
                </li>
                <li>
                  <LinkButton
                    label={"Contact Us"}
                    href="https://github.com/tailgrids/play-tailwind"
                    style="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src="assets/images/hero/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
              <div className="absolute -left-9 bottom-0 z-[-1]">
                <IconSquareGrid width={134} height={106} />
              </div>
              <div className="absolute -right-6 -top-6 z-[-1]">
                <IconSquareGrid width={134} height={106} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
