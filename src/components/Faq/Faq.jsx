import { IconRectangleGrid } from "../Icons";
import Para from "../Para";
import SubTitle from "../SubTitle";
import TinyTitle from "../TinyTitle";
import FaqCard from "./FaqCard";
const faqs = [
  {
    id: 1,
    question: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    id: 2,
    question: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    id: 3,
    question: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    id: 4,
    question: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
];

export default function Faq() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <TinyTitle label={"FAQ"} />
              <SubTitle>Any Questions? Look Here</SubTitle>
              <Para>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </Para>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 grid grid-cols-1  lg:grid-cols-2 ">
            {faqs?.map((item) => (
              <FaqCard key={item?.id} faq={item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <IconRectangleGrid width={48} height={134} />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <IconRectangleGrid width={48} height={134} />
        </span>
      </div>
    </section>
  );
}
