import { useState, useEffect } from "react";

const InvoiceCalculation = ({ subtotalAmt, currencyData }) => {
  const [subtotal, setSubtotal] = useState(subtotalAmt);
  const [taxPerc, setTaxPerc] = useState(0);
  const [taxAmt, setTaxAmt] = useState(0);
  const [discountPerc, setDiscountPerc] = useState(0);
  const [discountAmt, setDiscountAmt] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [grandtotal, setGrandtotal] = useState(0);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    setSubtotal(parseFloat(subtotalAmt).toFixed(2));
  }, [subtotalAmt]);

  useEffect(() => {
    let calculatedTaxAmt = parseFloat(subtotal) * (taxPerc / 100);
    setTaxAmt(calculatedTaxAmt.toFixed(2));

    let calculatedDiscAmt =
      (parseFloat(subtotal) + calculatedTaxAmt) * (discountPerc / 100);
    setDiscountAmt(calculatedDiscAmt.toFixed(2));

    let calculateGrandtotal =
      parseFloat(subtotal) +
      parseFloat(calculatedTaxAmt) +
      parseFloat(shippingCost) -
      parseFloat(calculatedDiscAmt);
    setGrandtotal(calculateGrandtotal.toFixed(2));
  }, [subtotal, taxPerc, discountPerc, shippingCost]);

  useEffect(() => {
    setCurrency(currencyData);
  }, [currencyData]);

  return (
    <>
      <div className="grid grid-cols-2 text-sm print:mt-6">
        <div>{/** first column */}</div>

        {/** second column */}
        <div className="grid grid-rows-4">
          {/** first row */}
          <div className="grid grid-cols-2">
            <div className="text-left font-medium">
              <p>Subtotal</p>
            </div>
            <div className="text-right font-light">
              <p>{subtotal}</p>
            </div>
          </div>
          {/** second row */}
          <div className="grid grid-cols-3">
            <div className="text-left font-medium">
              <p>Tax</p>
            </div>
            <div className="text-center font-light">
              <input
                type="number"
                className="focus:outline-0 focus:bg-blue-100 text-center w-2/5 print:hidden"
                step="0.01"
                min="0"
                value={taxPerc}
                onChange={(e) => setTaxPerc(e.target.value)}
              />
              <span className="print:hidden">%</span>
              <p className="text-center hidden print:block">{taxPerc} %</p>
            </div>
            <div className="text-right font-light">
              <p>{taxAmt}</p>
            </div>
          </div>
          {/** third row */}
          <div className="grid grid-cols-3">
            <div className="text-left font-medium">
              <p>Discount</p>
            </div>
            <div className="text-center font-light">
              <input
                type="number"
                className="focus:outline-0 focus:bg-blue-100 text-center w-2/5 print:hidden"
                step="0.01"
                min="0"
                value={discountPerc}
                onChange={(e) => setDiscountPerc(e.target.value)}
              />
              <span className="print:hidden">%</span>
              <p className="text-center hidden print:block">{discountPerc} %</p>
            </div>
            <div className="text-right font-light">
              <p>{discountAmt}</p>
            </div>
          </div>
          {/** fourth row */}
          <div className="grid grid-cols-2">
            <div className="text-left font-medium">
              <p>Shipping</p>
            </div>
            <div className="text-right font-light">
              <input
                type="number"
                className="focus:outline-0 focus:bg-blue-100 text-right w-2/5"
                step="0.01"
                min="0"
                value={shippingCost}
                onChange={(e) => setShippingCost(e.target.value)}
              />
            </div>
          </div>
          {/** fifth row */}
          <div className="grid grid-cols-2 border-y border-dashed border-1 border-gray-400 my-2 py-2">
            <div className="text-left font-medium">
              <p>Grand Total</p>
            </div>
            <div className="text-right font-medium">
              <p>
                {currency} {grandtotal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceCalculation;
