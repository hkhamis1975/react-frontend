import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Helga Richard",
      role: "Developer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 2,
      name: "Linda Anderson",
      role: "Developer",
      img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg",
    },
    {
      id: 3,
      name: "Harold Smith",
      role: "Tester",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
    },
    {
      id: 4,
      name: "Harry Gate",
      role: "Manager",
      img: "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg",
    },
  ]);

  const addEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  };
  const updateEmployee = (id, name, role) => {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: name, role: role };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  };
  return (
    <div className="App bg-blue-50 min-h-screen">
      <header className="App-header"></header>
      <Header />
      <div className="App-body flex flex-wrap justify-center my-2">
        {employees.map((employee) => {
          return (
            <Employee
              key={uuidv4()}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              employee={employee}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
      <div>
        <AddEmployee addEmployee={addEmployee} />
      </div>
    </div>
  );
}

export default App;
