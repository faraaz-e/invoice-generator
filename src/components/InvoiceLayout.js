import { useState } from "react";
import ConsigneeDetail from "./ConsigneeDetail";
import ConsignerDetail from "./ConsignerDetail";
import InvoiceIdentification from "./InvoiceIdentification";
import InvoiceTable from "./InvoiceTable";
import RemarkSection from "./RemarkSection";
import UpperSection from "./UpperSection";

const InvoiceLayout = () => {
  const [currencyData, setCurrencyData] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const sendCurrencyData = (data) => {
    setCurrencyData(data);
  };

  const sendInvoiceNumber = (data) => {
    setInvoiceNumber(data);
  };

  return (
    <>
      <div className="flex justify-center bg-gray-200 h-full print:bg-white">
        <UpperSection
          sendCurrencyData={sendCurrencyData}
          sendInvoiceNumber={sendInvoiceNumber}
        />
      </div>
      <div className="flex justify-center bg-gray-200 h-full print:bg-white">
        <div className="container bg-white w-full lg:w-1/2 py-10 m-4 h-full px-10 print:w-full print:px-0 print:py-3">
          {/** First row */}
          <div className="grid grid-cols-3 my-2 pb-4">
            <ConsignerDetail />
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-700">Invoice</p>
            </div>
          </div>

          {/** Second row */}
          <div className="grid grid-cols-3 gap-2 my-2 pt-4 text-sm">
            <ConsigneeDetail />
            <InvoiceIdentification invoiceNumber={invoiceNumber} />
          </div>

          {/** Third row */}
          <InvoiceTable currencyData={currencyData} />

          {/** Fourth row - Add Item button */}

          {/* Fifth Row - <Invoice calculation />*/}

          {/* Sixth Row */}
          <RemarkSection />
        </div>

        {/* Right section */}
        {/* <RightSection
          sendCurrencyData={sendCurrencyData}
          sendInvoiceNumber={sendInvoiceNumber}
        /> */}
      </div>
    </>
  );
};

export default InvoiceLayout;
