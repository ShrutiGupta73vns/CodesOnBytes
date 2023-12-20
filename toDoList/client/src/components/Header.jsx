import Logo from "../assets/LogoNew.png";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png";

export default function Header() {
  return (
    <div className="flex justify-between p-2">
      <div className="flex items-center">
        <img src={Logo} alt="" className="h-14 pl-3 pr-2 p-1 pt-2" />
        <span className="font-mono  text-2xl tracking-wide pt-2 font-semibold text-violet-800">
          My
        </span>
        <span className="font-mono  text-2xl tracking-wide pt-2 font-semibold text-violet-800">
          Todos{" "}
        </span>
      </div>
      <div className="flex items-center gap-5 pr-4 ">
        <span className="text-lg font-semibold invisible sm:visible">
          Shruti Here !
        </span>
        <img src={Github} className="h-9 hover:animate-bounce" />
        <img
          src={Linkedin}
          className="h-10 animate-pulse hover:animate-bounce"
        />
      </div>
    </div>
  );
}
