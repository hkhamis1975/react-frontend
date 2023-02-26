import "./index.css";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body bg-blue-50 flex flex-wrap justify-center">
        <Employee
          name="Helga Richard"
          role="Developer"
          img="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg"
        />
        <Employee
          name="Linda Anderson"
          role="Developer"
          img="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg"
        />
        <Employee
          name="Harold Smith"
          role="Tester"
          img="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
        />
        <Employee
          name="Harry Gate"
          role="Manager"
          img="https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg"
        />
      </div>
    </div>
  );
}

export default App;
