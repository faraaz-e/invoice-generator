import { useEffect, useState } from "react";
import resetIcon from "../../reset-icon.png";

const RemarkSection = () => {
  const [remark, setRemark] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <div className="flex-row py-4">
        <p className="justify-left text-sm py-2">
          <input
            type="text"
            placeholder="Please complete the payment before the Due Date."
            className="w-3/4 focus:outline-0 focus:bg-blue-100 font-light print:hidden"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <span>
            <img
              src={resetIcon}
              alt="Reset icon"
              className="h-4 w-4 hover:cursor-pointer print:hidden"
              onClick={() => setRemark("")}
            />
          </span>
        </p>
        <p className="w-3/4 font-light hidden print:block">{remark}</p>

        <p className="justify-right text-sm py-2">
          <input
            type="text"
            placeholder="Thank you for the business."
            className="w-3/4 focus:outline-0 focus:bg-blue-100 font-light print:hidden"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <span>
            <img
              src={resetIcon}
              alt="Reset icon"
              className="h-4 w-4 hover:cursor-pointer print:hidden"
              onClick={() => setComment("")}
            />
          </span>
        </p>
        <p className="w-3/4 font-light hidden print:block">{comment}</p>
      </div>
    </>
  );
};

export default RemarkSection;
