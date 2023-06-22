import { getAbout } from "@/sanity/sanity-utils";
import { MdLocationOn } from "react-icons/md";
import {
  FaReact,
  FaGamepad,
  FaCode,
  FaReadme,
  FaPuzzlePiece,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import {
  GiSushis,
  GiCookingPot,
  GiTennisBall,
  GiNightSleep,
  GiCube,
} from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { ImArrowDown } from "react-icons/im";
import { MdSmartToy } from "react-icons/md";
import HeatMap from "../components/HeatMap";

export default async function About() {
  const info = await getAbout();

  type HobbiesLogoType = {
    [key: string]: React.ReactElement;
  };

  const hobbiesLogo: HobbiesLogoType = {
    cook: <GiCookingPot size={32} className="fill-[#016cb1]" />,
    sushi: <GiSushis size={32} className="fill-[#ba5615]" />,
    tennis: <GiTennisBall size={32} className="fill-[#bbd214]" />,
    games: <FaGamepad size={32} className="fill-[#b2b4b5]" />,
    tv: <FiMonitor size={32} className="fill-[#543666]" />,
    code: <FaCode size={32} className="fill-[#42dca9]" />,
    read: <FaReadme size={32} className="fill-[#834b1c]" />,
    sleep: <GiNightSleep size={32} className="fill-[#335a81]" />,
    avatar: <ImArrowDown size={32} className="fill-[#a2c1de]" />,
    collection: <MdSmartToy size={32} className="fill-[#d43e3f]" />,
    rubiks: <GiCube size={32} className="fill-[#dcaf0d]" />,
    boardgames: <FaPuzzlePiece size={32} className="fill-[#91c75a]" />,
  };

  return (
    <div>
      <div className="grid grid-cols-2 max-[885px]:grid-cols-1 animate-slide-in-right">
        <div className="p-8 m-2 bg-white shadow-md dark:bg-neutral-700 rounded-3xl">
          <h3 className="mb-4 text-2xl font-bold text-neutral-700 dark:text-white">
            {info.title}
          </h3>
          <div className="text-justify">{info.content}</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between p-6 m-2 bg-white shadow-md dark:bg-neutral-700 rounded-3xl max-[370px]:flex-col max-[370px]:items-center max-[370px]:mt-2">
            <div>Name:</div>
            <div className="flex items-center">
              <div className="mr-2 font-bold">{info.name}</div>
              <BsFillPersonFill size={24} />
            </div>
          </div>
          <div className="flex justify-between p-6 m-2 bg-white shadow-md dark:bg-neutral-700 rounded-3xl max-[370px]:flex-col max-[370px]:items-center max-[370px]:mt-2">
            <div>Based in:</div>
            <div className="flex items-center">
              <div className="mr-2 font-bold">{info.location}</div>
              <MdLocationOn size={24} />
            </div>
          </div>
          <div className="flex justify-between p-6 m-2 bg-white shadow-md dark:bg-neutral-700 rounded-3xl max-[370px]:flex-col max-[370px]:items-center max-[370px]:mt-2">
            <div>Main Tech:</div>
            <div className="flex items-center">
              <div className="mr-2 font-bold">{info.mainTech}</div>
              <FaReact size={24} />
            </div>
          </div>
          <div className="flex justify-between p-6 m-2 bg-white shadow-md dark:bg-neutral-700 rounded-3xl max-[370px]:flex-col max-[370px]:items-center max-[370px]:mt-2">
            <div>Favorite Food:</div>
            <div className="flex items-center">
              <div className="mr-2 font-bold">{info.food}</div>
              <GiSushis size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="animate-grow ">
        <div className="flex justify-center mt-6 p-6 bg-white shadow-md dark:bg-neutral-700 rounded-3xl">
          <HeatMap />
        </div>
        <div className="grid grid-cols-6 max-[885px]:grid-cols-4 max-[600px]:grid-cols-3 max-[500px]:grid-cols-2 max-[300px]:grid-cols-1 mt-4">
          {info.hobbies.map((hobby) => (
            <div
              key={hobby.value}
              className="flex flex-col items-center p-3 m-2 bg-white shadow-md dark:bg-neutral-700 rounded-3xl"
            >
              {hobbiesLogo[hobby.value]}
              <div className="mt-2 font-semibold">{hobby.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
