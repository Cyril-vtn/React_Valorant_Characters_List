import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import List from "./Components/List";

function App() {
  const [agents, setAgents] = useState([]);

  // const getData = async () => {
  //   const req = await fetch("https://valorant-api.com/v1/agents", params);
  //   const res = await req.json();
  //   console.log(res);
  // };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();

    setAgents(data.data);
  };
  return (
    <>
      <Navbar />
      <div className="App">
        <List data={agents} />
      </div>
    </>
  );
}

export default App;
