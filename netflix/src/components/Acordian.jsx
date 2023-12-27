import Plus from '../assets/Plus.svg'
export default function Acordian(props) {
  return (
    <div className="bg-{#2D2D2D} h-[40px] text-white bg-[#2D2D2D] w-full p-9 text-lg flex items-center ">
        <div className="flex justify-between w-full">
      {props.title}
      <img src={Plus} alt="" />
      </div>
    </div>
  );
}
