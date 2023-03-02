import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../shared";

export default function Customer() {
  const [customer, setCustomer] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;

    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
        }
        return res.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, [id]);

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
      <div>
        <button
          className="bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            const url = baseUrl + "api/customers/" + id;
            fetch(url, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((response) => {
              navigate("/customers");
            });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
