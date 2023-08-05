import ReactDOM from "react-dom/client";
import InvoiceLayout from "./components/InvoiceLayout";

const AppLayout = () => {
  return (
    <>
      <InvoiceLayout />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
