import InvoiceCalculation from "./InvoiceCalculation";
import AddItem from "./AddItem";
import ItemRow from "./ItemRow";
import { useEffect, useRef, useState } from "react";
import resetIcon from "../../reset-icon.png";

const InvoiceTable = ({ currencyData }) => {
  const [subtotalAmt, setSubtotalAmt] = useState(0);
  const [currencyType, setCurrencyType] = useState(currencyData);
  const [rowId, setRowId] = useState(1);
  const [itemCountArr, setItemCountArr] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState("");
  const isMounted = useRef(false);
  const [flag, setFlag] = useState(0);

  const sendData = (data) => {
    setSubtotalAmt(data);
    setFlag(0);
  };

  useEffect(() => {
    setCurrencyType(currencyData);
  }, [currencyData]);

  const sendItemId = (data) => {
    setRowId(data);
  };

  const sendDeleteItemId = (data) => {
    setDeleteItemId(data);
  };

  useEffect(() => {
    let temp = itemCountArr.slice();
    temp.push({ itemRowId: "itemRow" + rowId });
    setItemCountArr(temp);
  }, [rowId]);

  useEffect(() => {
    if (isMounted.current) {
      const filteredArray = itemCountArr.filter((obj) => {
        return obj.itemRowId !== deleteItemId;
      });
      setItemCountArr(filteredArray);
      setFlag(1);
    } else {
      isMounted.current = true;
    }
  }, [deleteItemId]);

  return (
    <>
    <div className="mt-5">
      <span className="p-2 flex justify-end">
        <img
          src={resetIcon}
          alt="Reset icon"
          className="h-4 w-4 hover:cursor-pointer print:hidden"
          onClick={() => {
            setItemCountArr([])
          }}
        />
      </span>
      <table className="table-auto w-full text-sm">
        <thead className="bg-gray-700 text-white">
          <tr className="text-center">
            <th className="p-2 font-medium">Product / Item</th>
            <th className="p-2 font-medium">Qnty</th>
            <th className="p-2 font-medium">Price</th>
            <th className="p-2 font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {itemCountArr.map((itemCount) => (
            <ItemRow
              key={itemCount.itemRowId}
              sendData={sendData}
              sendDeleteItemId={sendDeleteItemId}
              id={itemCount.itemRowId}
              flag={flag}
            />
          ))}
          {/* <ItemRow sendData={sendData} /> */}
        </tbody>
      </table>

      <AddItem sendItemId={sendItemId} />

      <InvoiceCalculation
        subtotalAmt={subtotalAmt}
        currencyData={currencyType}
      />
      </div>
    </>
  );
};

export default InvoiceTable;
