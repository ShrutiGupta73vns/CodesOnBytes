import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";
export default function Item({
  title,
  description,
  isChecked,
  id,
  setChanged,
}) {
  const [isEditing, setisEditing] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    title: title,
    description: description,
  });

  const [isMarked, setisMarked] = useState(isChecked);

  const handleChange = (event) => {
    setUpdateFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch(`/api/v1/todo/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setChanged((preState) => !preState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch(`/api/v1/todo/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateFormData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setChanged((prev) => !prev);
      setisEditing((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsChecked = async () => {
    try {
      console.log(isMarked);
      setisMarked((prev) => !prev);
      console.log(isMarked);

      const res = await fetch(`/api/v1/todo/checked/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isChecked: !isMarked }),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <div className="h-40 flex flex-col w-40 border rounded-lg shadow-lg m-4 gap-4 p-4 overflow transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 hover:shadow-2xl duration-300 relative ">
          <div className=" flex gap-2  ">
            <input
              className="  w-5 h-5 accent-violet-500 absolute bottom-3 left-3 m-1"
              type="checkbox"
              checked={isMarked}
              onChange={handleIsChecked}
            />
            <span className="font-medium">{title}</span>
          </div>
          <span className="text-sm   text-slate-500 line-clamp-2">
            {description}
          </span>

          <div className="flex items-center absolute bottom-2  gap-2 right-2 p-1">
            <button onClick={handleClick}>
              <AiTwotoneDelete className=" h-6 w-6" />
            </button>
            <button onClick={() => setisEditing((prev) => !prev)}>
              <CiEdit className="h-6 w-6" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="h-40 flex flex-col w-40 border rounded-lg shadow-lg m-4 gap-4 p-4 overflow transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 hover:shadow-2xl duration-300 relative ">
            <div className=" flex gap-2  ">
              <input
                className="  w-5 h-5 accent-violet-500 absolute bottom-3 left-3 m-1"
                type="checkbox"
                checked={isMarked}
                onChange={handleIsChecked}
              />
              <form onSubmit={handleEdit} className="flex flex-col gap-2 ">
                <input
                  defaultValue={title}
                  type="text"
                  placeholder="Edit title"
                  name="title"
                  required
                  onChange={handleChange}
                  className="w-32 border rounded-lg  p-1 outline-none hover:shadow-xl text-sm"
                />
                <input
                  defaultValue={description}
                  type="text"
                  placeholder="Edit description"
                  name="description"
                  onChange={handleChange}
                  className="w-32 border rounded-lg  p-1 outline-none hover:shadow-xl text-sm"
                />
                <button className="absolute bottom-3 right-3 border-2 border-blue-500 p-1 rounded-md text-xs text-blue-500 font-semibold bg-white hover:bg-blue-500 hover:text-white ">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
