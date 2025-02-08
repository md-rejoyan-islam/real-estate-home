import Para from "../Para";
import SubTitle from "../SubTitle";
import TinyTitle from "../TinyTitle";
import TeamMember from "./TeamMember";
const teamMembers = [
  {
    id: 1,
    name: "Melissa Tatcher",
    designation: "Marketing Expert",
    image: "./assets/images/team/team-01.png",
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
        name: "instagram",
        link: "#",
        icon: "instagram",
      },
    ],
  },
  {
    id: 2,
    name: "Stuard Ferrel",
    designation: "Stuard Ferrel",
    image: "./assets/images/team/team-02.png",
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
        name: "instagram",
        link: "#",
        icon: "instagram",
      },
    ],
  },
  {
    id: 3,
    name: "Eva Hudson",
    designation: "Creative Designer",
    image: "./assets/images/team/team-03.png",
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
        name: "instagram",
        link: "#",
        icon: "instagram",
      },
    ],
  },
  {
    id: 4,
    name: "Jackie Sanders",
    designation: "Founder of Facebook",
    image: "./assets/images/team/team-04.png",
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
        name: "instagram",
        link: "#",
        icon: "instagram",
      },
    ],
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <TinyTitle label={" Our Team Members"} />
              <SubTitle>Our Clients </SubTitle>
              <Para>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </Para>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers?.map((member) => (
            <TeamMember member={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
