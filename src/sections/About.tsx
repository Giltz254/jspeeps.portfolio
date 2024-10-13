import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascritIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import TechIcon from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascritIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Music",
    emoji: "🎼",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
  },
  {
    title: "Reading",
    emoji: "📑",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="Glimpse into my world"
          description="Learn more about who i am, what i do, and what inspires me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image
                src={BookImage}
                alt="Book Cover"
                className="object-cover"
              />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
            className="px-6 pt-6"
              title="My Toolbox"
              description="Explore the technologies and tools i use to craft exceptional
                digital experiences."
            />
            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the code"
              description="Explore my intrests and hobbies beyond writing code."
            />
            <div>
              {hobbies.map((hobby, i) => (
                <div key={i}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt="Pinned Location" />
            <Image src={SmileMemoji} alt="Jspeeps" />
          </Card>
        </div>
      </div>
    </div>
  );
};
