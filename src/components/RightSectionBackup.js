import { useEffect, useState } from "react";
import currencyList from "../utils/currencyList";

const RightSection = (props) => {
  const [invoiceNo, setInvoiceNo] = useState(generateInvoiceNumber);
  const [currencyType, setCurrencyType] = useState(currencyList[0].value);

  function generateInvoiceNumber() {
    const currentDateTime = new Date();
    const currentDate = currentDateTime
      .toLocaleDateString()
      .split("/")
      .join("");
    const currentTime = currentDateTime
      .toLocaleTimeString()
      .split(":")
      .join("")
      .slice(0, -3);
    return currentDate + currentTime;
  }

  useEffect(() => {
    props.sendInvoiceNumber(invoiceNo);
  }, [invoiceNo]);

  useEffect(() => {
    setCurrencyType(currencyType);
    props.sendCurrencyData(currencyType); //send data to parent
  }, [currencyType]);

  return (
    <>
      <div className="fixed top-3 right-32 print:hidden">
        <div className="grid grid-rows-1">
          <div className="py-2">
            <select
              className="p-2 w-full rounded-lg border border-1 border-gray-700 text-xs focus:outline-0"
              value={currencyType}
              onChange={(e) => setCurrencyType(e.target.value)}
            >
              {currencyList.map((item, index) => (
                <option className="text-xs" key={index} value={item.value}>
                  {item.currencyType}
                </option>
              ))}
            </select>
          </div>
          <div className="py-2">
            <button
              className="p-2 w-full bg-teal-600 text-white text-xs rounded-lg"
              onClick={() => setInvoiceNo(generateInvoiceNumber)}
            >
              Generate Invoice number
            </button>
          </div>
          <div className="py-2 justify-center">
            <button
              className="p-2 w-full bg-red-500 text-white text-xs rounded-lg"
              onClick={() => window.location.reload()}
            >
              Reset Invoice
            </button>
          </div>
          <div className="py-2 flex justify-center">
            <button
              className="p-2 w-full bg-blue-600 text-white text-xs rounded-lg"
              onClick={window.print}
            >
              Review / Print Invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
