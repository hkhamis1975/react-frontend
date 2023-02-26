import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Helga Richard",
      role: "Developer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Linda Anderson",
      role: "Developer",
      img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg",
    },
    {
      name: "Harold Smith",
      role: "Tester",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
    },
    {
      name: "Harry Gate",
      role: "Manager",
      img: "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body bg-blue-50 flex flex-wrap justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
