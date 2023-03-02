import { useEffect, useState, useNavigate } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../shared";

export default function Customer() {
  const [customer, setCustomer] = useState();
  const { id } = useParams();
  // const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);

  //   const url = baseUrl + "api/token/refresh/";
  const url = baseUrl + "api/customers/" + id;

  useEffect(() => {
    // console.log(url);
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          //render a 404 component in this page
          setNotFound(true);
        }
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
    <div className="p-3">
      {notFound ? <p>The customer with id {id} was not found</p> : null}
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
    </div>
    // <p>{customer.name}</p>
    //   <p>{customer.industry}</p>
  );
}
