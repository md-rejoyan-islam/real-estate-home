import { IconCircleShape } from "./Icons";
import LinkButton from "./LinkButton";
import Para from "./Para";
import SubTitle from "./SubTitle";

export default function CTA() {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <SubTitle
                  style={
                    "mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]"
                  }
                >
                  <span>What Are You Looking For?</span>
                  <span className="text-3xl font-normal md:text-[40px]">
                    Get Started Now
                  </span>
                </SubTitle>

                <Para
                  style={"text-white mb-6"}
                  label={
                    "There are many variations of passages of Lorem Ipsum but the majority have suffered in some form."
                  }
                />

                <LinkButton
                  href={"#"}
                  label={"Let's have a meeting"}
                  style={
                    "inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <IconCircleShape width={495} height={470} />
        </span>
        <span className="absolute bottom-0 right-0 rotate-180 ">
          <IconCircleShape width={495} height={470} />
        </span>
      </div>
    </section>
  );
}
