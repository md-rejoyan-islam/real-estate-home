import { IconPirate, IconPirate2, IconPirate3 } from "./Icons";
import LinkButton from "./LinkButton";
import Para from "./Para";
import SubTitle from "./SubTitle";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <SubTitle>Innovative Tools for Real Estate Excellence</SubTitle>

                <Para style={"mb-10 "}>
                  The main &apos;thrust&apos; is to focus on educating our
                  clients on how to best navigate the real estate market with
                  interactive guides and personalized consultations led by
                  industry experts.
                  <br />
                  <br />
                  The main &apos;thrust&apos; is to focus on educating attendees
                  on how to best protect highly vulnerable business applications
                  with interactive panel.
                </Para>
                <LinkButton
                  label={"Know More"}
                  href={"#"}
                  style={
                    "inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                  }
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      src="./assets/images/about/about-image-01.jpg"
                      alt="about image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img
                      src="./assets/images/about/about-image-02.jpg"
                      alt="about image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span className="block text-base font-semibold text-white">
                        We have
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <IconPirate />
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <IconPirate2 />
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <IconPirate3 />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
