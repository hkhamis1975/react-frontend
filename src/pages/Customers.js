import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState();
  const url = "http://127.0.0.1:8000/api/customers/";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        setCustomers(data.customers);
        // console.log("api response " + customers);
      });
  }, []);

  return (
    // <h1>Customers</h1>

    <>
      <h1>Here are our customers:</h1>
      {customers
        ? customers.map((customer) => {
            return (
              <div className="m-2" key={customer.id}>
                <Link to={"/customers/" + customer.id}>
                  <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    {customer.name}
                  </button>
                </Link>
              </div>
            );
          })
        : null}
    </>
  );
}
