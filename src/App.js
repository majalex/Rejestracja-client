import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/all`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <h1>Zapisz się na szkolenie</h1>
      <Form getData={getData}></Form>
      <Table data={data} setData={setData}></Table>
      
    </div>
  );
}

export default App;
