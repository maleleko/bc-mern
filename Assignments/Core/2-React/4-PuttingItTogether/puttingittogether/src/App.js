import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
      lastName={"Osby"}
      firstName={"Maleko"}
      age={26}
      hairColor={"Black"}
      gender={"Male"}/>

      <PersonCard
      lastName={"Coll"}
      firstName={"Skye"}
      age={24}
      hairColor={"Black"}
      gender={"Female"}/>

      <PersonCard
      lastName={"Gallo"}
      firstName={"Cedric"}
      age={28}
      hairColor={"Black"}
      gender={"Male"}/>
      
      <PersonCard
      lastName={"Bowman"}
      firstName={"Harry"}
      age={25}
      hairColor={"Brown"}
      gender={"Male"}/>

      <PersonCard
      lastName={"Holla"}
      firstName={"Tay"}
      age={25}
      hairColor={"Black"}
      gender={"Male"}/>
    </div>
  );
}

export default App;
