import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../shared";

export default function Customer() {
  const [customer, setCustomer] = useState();
  const { id } = useParams();

  //   const url = baseUrl + "api/token/refresh/";
  const url = baseUrl + "api/customers/" + id;

  useEffect(() => {
    // console.log(url);
    fetch(url)
      .then((res) => {
        // console.log(res.json());
        return res.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        // console.log("api response: " + customer.customer.name);
      });
  }, []);

  //   console.log(customer ? customer.name : "customer undefined");

  return (
    <>
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
    </>
    // <p>{customer.name}</p>
    //   <p>{customer.industry}</p>
  );
}
