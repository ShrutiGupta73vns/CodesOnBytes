import { useEffect, useState } from "react";
import Item from "./Item";

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
      setFormData({
        ...formData,
        title: "",
        description: "",
      });

      setChanged((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl  mx-auto gap-2 flex  justify-center"
      >
        <input
          type="text"
          autoComplete="off"
          className="p-2 w-32 md:w-40 md:m-2 border border-slate-300 rounded-md outline-none focus:border-slate-500 focus:shadow-lg "
          placeholder="Enter a title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          autoComplete="off"
          className="p-2 w-56 md:w-72 md:m-2 border border-slate-300 rounded-md outline-none focus:border-slate-500 focus:shadow-lg"
          placeholder="Enter a description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button
          className="md:m-2  px-2  bg-blue-500 rounded-lg text-xs  font-bold text-white text border-2
        +    hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:shadow-lg  hover:animate-pulse "
        >
          ADD TASK
        </button>
      </form>
      <div className="flex justify-center m-4 gap-6">
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1  max-w-4xl items-center  flex-wrap  justify-start mt-20 ">
          {elements}
        </div>
      </div>
    </div>
  );
}
