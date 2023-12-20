import { useEffect, useState } from "react";
import Item from "./Item";
import Image from "../assets/Image.webp";

export default function Body() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (event) => {
    setFormData((prevstate) => {
      return {
        ...prevstate,
        [event.target.name]: event.target.value,
      };
    });
  };

  const [todoList, setTodoList] = useState([]);
  const [changed, setChanged] = useState(true);

  useEffect(() => {
    fetch("/api/v1/todo/")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  }, [changed]);

  const elements = todoList.map((item) => {
    return (
      <Item
        title={item.title}
        description={item.description}
        isChecked={item.checked}
        key={item._id}
        id={item._id}
        setChanged={setChanged}
      />
    );
  });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch("/api/v1/todo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setChanged((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto gap-2 flex justify-center"
      >
        <input
          type="text"
          className="p-2 m-4 border border-slate-300 rounded-md outline-none focus:border-slate-500 focus:shadow-lg "
          placeholder="Enter a title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          className="p-2 m-4 border border-slate-300 rounded-md outline-none focus:border-slate-500 focus:shadow-lg w-80"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <button className=" m-4 px-2  bg-blue-500 rounded-lg text-xs  font-bold text-white text border-2 hover:bg-white hover:text-blue-500 hover:border-blue-500 ">
          ADD TASK
        </button>
      </form>
      <div className="flex justify-center m-4 gap-6">
        
        <div className=" grid grid-cols-4 gap-1 max-w-4xl items-center  flex-wrap  justify-start mt-20 ">
          {elements}
        </div>
      </div>
    </div>
  );
}
