import { useEffect, useState } from "react";
import deleteIcon from "../../delete-icon.png";

const ItemRow = (props) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [qnty, setQnty] = useState(1);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let totalAmt = qnty * price;
    setTotalAmt(totalAmt.toFixed(2));
  }, [qnty, price]);

  useEffect(() => {
    //calculate final subtotal (passing data from child component to parent component)
    props.sendData(calculateSubtotal);
  }, [totalAmt, props.flag]); //flag used to re-render the subtotal after row deletion

  const deleteItem = (id) => {
    props.sendDeleteItemId(id);
  };

  function calculateSubtotal() {
    let rowsTotalAmt = 0;
    var tableRows = document.getElementsByTagName("tbody")[0];
    tableRows = tableRows.rows;
    let rowsArr = Array.from(tableRows);
    rowsArr.forEach((currentElement) => {
      let rowAmt = currentElement.lastElementChild.innerText;
      rowsTotalAmt += parseFloat(rowAmt);
    });
    return rowsTotalAmt;
  }

  return (
    <>
      <tr
        className="text-center border-b border-1 border-gray-300 font-light"
        id={props.id}
      >
        <td className="p-2 flex items-center">
          <img
            src={deleteIcon}
            alt="Delete icon"
            className="h-4 hover:cursor-pointer pr-1 print:hidden"
            onClick={() => deleteItem(props.id)}
          />

          <textarea
            className="w-full focus:outline-0 focus:bg-blue-100 flex-wrap justify-center text-center print:resize-none print:hidden"
            rows="3"
            cols="20"
            placeholder="Item name / description"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></textarea>
          <p className="w-full justify-center text-center hidden print:block">
            {itemName}
          </p>
        </td>
        <td className="p-3 flex-wrap justify-center font-light">
          <input
            type="number"
            className="focus:outline-0 focus:bg-blue-100 text-center"
            value={qnty}
            onChange={(e) => setQnty(e.target.value)}
          />
        </td>
        <td className="p-3 flex-wrap justify-center font-light">
          <input
            type="number"
            className="focus:outline-0 focus:bg-blue-100 text-center"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </td>
        <td className="p-3 flex-wrap justify-center font-light">{totalAmt}</td>
      </tr>
    </>
  );
};

export default ItemRow;
