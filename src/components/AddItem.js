import { useEffect, useState } from "react";
import plusIcon from "../../plus-icon.png";

const AddItem = (props) => {
  let [counter, setCounter] = useState(1);

  useEffect(() => {
    props.sendItemId(counter);
  }, [counter]);

  return (
    <>
      <div className="text-left">
        <button
          className="flex justify-start items-center m-4 text-sm print:hidden"
          onClick={() => setCounter(++counter)}
        >
          <img src={plusIcon} alt="Add Icon" className="h-4" />
          <span className="px-2 text-green-700 font-medium">Add Item</span>
        </button>
      </div>
    </>
  );
};

export default AddItem;
