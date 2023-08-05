import { useState } from "react";
import resetIcon from "../../reset-icon.png";

const ConsignerDetail = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  return (
    <>
      <div className="col-span-2 flex-col text-left text-sm">
        <p className="font-medium pb-3 flex items-center">
          Consigner/Bill From:
          <span className="px-3">
            <img
              src={resetIcon}
              alt="Reset icon"
              className="h-4 w-4 hover:cursor-pointer print:hidden"
              onClick={() => {
                setCompanyName("");
                setCompanyAddress("");
              }}
            />
          </span>
        </p>
        <input
          type="text"
          placeholder="Your Company Name"
          className="w-3/4 focus:outline-0 focus:bg-blue-100 font-light print:hidden"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <p className="w-3/4 font-normal uppercase hidden print:block">
          {companyName}
        </p>
        <textarea
          placeholder="Your Company Address"
          className="w-3/4 focus:outline-0 focus:bg-blue-100 font-light print:hidden"
          rows="3"
          col="20"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        ></textarea>
        <p className="w-3/4 font-light hidden print:block">{companyAddress}</p>
      </div>
    </>
  );
};

export default ConsignerDetail;
