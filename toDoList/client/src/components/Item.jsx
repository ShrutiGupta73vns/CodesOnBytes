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
      console.log(isMarked)
      setisMarked((prev) =>!prev);
      console.log(isMarked)

      const res = await fetch(`/api/v1/todo/checked/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({isChecked: !isMarked}),
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
      <div className="h-40 flex flex-col w-40 border rounded-lg shadow-lg m-10 gap-4 p-3 ">
        <span>{title}</span>
        <span>{description}</span>
        <input
          type="checkbox"
          checked={isMarked}
          onChange={handleIsChecked}
        />
        <div className="flex items-center">
          <button onClick={handleClick}>
            <AiTwotoneDelete className=" h-5 w-6" />
          </button>
          <button onClick={() => setisEditing((prev) => !prev)}>
            <CiEdit className="h-5 w-7" />
          </button>
        </div>
      </div>
      {isEditing && (
        <form onSubmit={handleEdit}>
          <input
            defaultValue={title}
            type="text"
            placeholder="Edit title"
            name="title"
            onChange={handleChange}
            className="p-2 m-2 border border-gray-400 rounded-lg"
          />
          <input
            defaultValue={description}
            type="text"
            placeholder="Edit description"
            name="description"
            onChange={handleChange}
            className="p-2 m-2 border border-gray-400 rounded-lg"
          />
          <button>UPDATE</button>
        </form>
      )}
    </div>
  );
}
