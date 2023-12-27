import Background from "../assets/Background.jpg";
import Netflix from "../assets/Netflix.png";
import Language from "../assets/Language.png";
import Acordian from "./Acordian";
export default function Page() {
  const textArray = [
    "What is Netflix",
    "How much does Netflix cost?",
    "Where can I watch?",
    "how do I cancel",
    "What can I watch on Netflix",
    "Is Netflix good for kids?",
  ];
  const elements = textArray.map((item) => {
    return <Acordian title={item} key={item} />;
  });
  return (
    <div className="">
      <div className="   w-full bg-gradient-to-t from-black/[0.9] via-black/[.4]  to-black/[0.8] border-b-[8px] border-zinc-800 ">
        <img
          src={Background}
          className=" h-[32.5rem] relative -z-40 w-full  object-cover "
        />
        <img src={Netflix} className="absolute top-1 left-3 h-[3.8rem]  " />
        <div className="absolute  w-[170px] top-5 right-1 flex gap-3">
          <button className="border border-[#5F5F5F] bg-black/[0.3]  h-[30px] w-[4rem] p-2 rounded-[4px]  ">
            <img src={Language} alt="" className="h-[15px]" />
          </button>
          <button className="  h-[30px] w-[4.5rem] text-white bg-[#E50914] rounded-[4px] text-sm">
            Sign In{" "}
          </button>
        </div>
        <div className="absolute top-[95px]  w-full  flex flex-col justify-center items-center p-6 gap-2 ">
          <span className="text-center text-white text-[2rem] font-bold leading-[40px]">
            {" "}
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </span>
          <span className="text-white text-[19px] mb-5">
            Watch anywhere. Cancel anytime.
          </span>
          <span className=" text-white text-center text-[18px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className=" top-[16rem] w-[24rem]  flex flex-col items-center gap-4 p-2 ">
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-[50px] border border-[#5F5F5F] rounded-md bg-black/[0.5] p-3 text-gray-400 outline-none  "
            />
            <button className="text-white bg-[#E50914] h-[48px] w-[150px] rounded-[4px] text-[18px]">
              Get Started{" "}
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full  border-b-8 border-zinc-800 flex flex-col bg-black items-center pt-12 p-7 pb-16 ">
        <div className="text-white flex flex-col items-center w-full gap-3 ">
          <span className="text-[2rem] font-bold ">Enjoy on your TV</span>
          <span className="text-center text-[1.13rem] ">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>
        <div className="bg-black relative pt-4 ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
            className="w-[480px] z-50 relative"
          />
          <video
            autoPlay
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            className="-z-60  absolute top-[63px] left-[57px]  w-[330px]"
          ></video>
        </div>
      </div>
      <div className=" w-full  border-b-8 border-zinc-800 flex flex-col bg-black items-center pt-12 p-7 pb-16 ">
        <div className="text-white flex flex-col items-center w-full gap-3 ">
          <span className="text-[2rem] font-bold text-center leading-10">
            Download your shows to watch offline
          </span>
          <span className="text-center text-[1.13rem] ">
            Save your favourites easily and always have something to watch.
          </span>
        </div>
        <div className="bg-black relative pt-4   ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            className="w-[480px] z-50   "
          />
          <div className="flex items-center gap-5 border-2 border-zinc-600 w-[280px] h-[4.1rem] rounded-[0.7rem] p-4 absolute right-[4rem] bottom-[1rem] bg-black ">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              className="h-[3rem]"
              alt=""
            />
            <div className="flex flex-col pr-6 ">
              <span className="text-white text-sm">Stranger Things</span>
              <span className="text-blue-600 text-xs"> Downloading...</span>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              className="h-[3.1rem] float-right"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-full  border-b-8 border-zinc-800 flex flex-col bg-black items-center pt-12 p-7 pb-16 ">
        <div className="text-white flex flex-col items-center w-full gap-3 ">
          <span className="text-[2rem] font-bold ">Watch every</span>
          <span className="text-center text-[1.13rem] ">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>
        <div className="bg-black relative pt-4 ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
            className="w-[480px] z-50 relative"
          />
          <video
            autoPlay
            loop
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            className="-z-60  absolute top-[52px] left-[63px]  w-[250px]"
          ></video>
        </div>
      </div>
      <div className=" w-full  border-b-8 border-zinc-800 flex flex-col bg-black items-center pt-12 p-7 pb-16 ">
        <div className="text-white flex flex-col items-center w-full gap-3 ">
          <span className="text-[2rem] font-bold ">
            Create profiles for kids
          </span>
          <span className="text-center text-[1.13rem] ">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </span>
        </div>
        <div className="bg-black relative pt-4 ">
          <img
            src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
            className="w-[480px] z-50 relative"
          />
        </div>
      </div>
      <div className=" w-full  border-b-8 border-zinc-800 flex flex-col bg-black items-center pt-12 p-7 pb-16 ">
        <div className="text-white flex flex-col items-center w-full gap-3 ">
          <span className="text-[2rem] font-bold text-center mb-5">
            Frequently Asked Questions{" "}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-2  w-full ">{elements}</div>
          <span className=" text-white text-center text-[18px] p-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>

          <div className=" top-[16rem] w-[24rem]  flex flex-col items-center gap-4 p-2 ">
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-[50px] border border-[#5F5F5F] rounded-md bg-zinc-900 p-3 text-gray-400 outline-none  "
            />
            <button className="text-white bg-[#E50914] h-[48px] w-[150px] rounded-[4px] text-[18px]">
              Get Started{" "}
            </button>
          </div>
        </div>

        
      </div>
      <div className="bg-black w-full text-white p-4">
        <div className="pb-4 text-zinc-300">
          <span className="m-2">Questions? Call <span className="underline">000-800-919-1694</span></span>
          </div>
          <div className="font-light text-sm underline underline-offset-2 p-2 flex flex-col flex-wrap gap-3  max-h-[17rem] justify-center text-zinc-400 ">
          <span>FAQ</span>
          <span>Account</span>
          <span>Investor Relations</span>
          <span>Ways to Watch</span>
          <span>Privacy</span>
          <span>Corporate Information</span>
          <span>Speed Test</span>
          <span>Only on Netflix</span>
          <span>Help Centre</span>
          <span>Media Centre</span>
          <span>Jobs</span>
          <span>Terms of Use</span>
          <span>Cookie Preference</span>
          <span>Contact Us</span>
          <span>Legal Notices</span>
          </div>
          <button className="border border-[#5F5F5F] bg-zinc-900 flex items-center gap-2 h-[30px] w-[7rem] p-3 rounded-[4px] mt-4 ml-[0.6rem] ">
            <img src={Language} alt="" className="h-[15px]" /> <span>English</span>
          </button>
          <div className="p-4 text-sm text-zinc-300 pl-3">
          <span className="font-light ">Netflix India</span>
          </div>
        </div>
    </div>
  );
}
