import { useState } from "react";
import resetIcon from "../../reset-icon.png";

const ConsigneeDetail = () => {
  const [clientCompanyName, setClientCompanyName] = useState("");
  const [clientCompanyAddress, setClientCompanyAddress] = useState("");

  return (
    <>
      <div className="col-span-2 text-left">
        <p className="font-medium pb-3 flex items-center">
          Consignee/Bill To:
          <span className="px-3">
            <img
              src={resetIcon}
              alt="Reset icon"
              className="h-4 w-4 hover:cursor-pointer print:hidden"
              onClick={() => {
                setClientCompanyName("");
                setClientCompanyAddress("");
              }}
            />
          </span>
        </p>
        <input
          type="text"
          placeholder="Client's Company Name"
          className="w-3/4 focus:outline-0 focus:bg-blue-100 font-light print:hidden"
          value={clientCompanyName}
          onChange={(e) => setClientCompanyName(e.target.value)}
        />
        <p className="w-3/4 font-normal uppercase hidden print:block">
          {clientCompanyName}
        </p>
        <textarea
          placeholder="Client's Company Address"
          className="w-3/4 focus:outline-0 focus:bg-blue-100 font-light print:hidden print:resize-none"
          rows="3"
          col="20"
          value={clientCompanyAddress}
          onChange={(e) => setClientCompanyAddress(e.target.value)}
        ></textarea>
        <p className="w-3/4 font-light hidden print:block">
          {clientCompanyAddress}
        </p>
      </div>
    </>
  );
};

export default ConsigneeDetail;
