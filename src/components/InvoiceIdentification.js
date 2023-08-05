import { useEffect, useState } from "react";

const InvoiceIdentification = ({ invoiceNumber }) => {
  const [newInvoiceNumber, setNewInvoiceNumber] = useState(invoiceNumber);
  const [customDate, setCustomDate] = useState(currentDate);
  const [dueDate, setDueDate] = useState("");

  function currentDate() {
    const currDate = new Date();
    const dd =
      currDate.getDate() < 10 ? "0" + currDate.getDate() : currDate.getDate();
    const mm =
      currDate.getMonth() + 1
        ? "0" + (currDate.getMonth() + 1)
        : currDate.getMonth() + 1;
    const yyyy = currDate.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  }

  useEffect(() => {
    setNewInvoiceNumber(invoiceNumber);
  }, [invoiceNumber]);

  return (
    <>
      <div className="grid grid-rows-4">
        {/** first row */}
        <div className="grid grid-cols-2">
          <div className="text-left font-medium">
            <p>Invoice No.</p>
          </div>
          <div className="text-right font-light">
            <input
              type="text"
              value={newInvoiceNumber}
              className="w-full focus:outline-0 focus:bg-blue-100 text-right"
              onChange={(e) => setNewInvoiceNumber(e.target.value)}
            />
          </div>
        </div>
        {/** second row */}
        <div className="grid grid-cols-2">
          <div className="text-left font-medium">
            <p>Date</p>
          </div>
          <div className="text-right font-light">
            <input
              type="date"
              className="w-full focus:outline-0 focus:bg-blue-100 text-right print:hidden"
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
            />
            <p className="w-full text-right hidden print:block">{customDate}</p>
          </div>
        </div>
        {/** third row */}
        <div className="grid grid-cols-2">
          <div className="text-left font-medium">
            <p>Due Date</p>
          </div>
          <div className="text-right font-light">
            <input
              type="date"
              value={dueDate}
              className="w-full focus:outline-0 focus:bg-blue-100 text-right print:hidden"
              onChange={(e) => setDueDate(e.target.value)}
            />
            <p className="w-full text-right hidden print:block">{dueDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceIdentification;
