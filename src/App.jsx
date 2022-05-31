import "./app.css"
import {Users} from "./users"
import {useState} from 'react';
import { Table } from "./Table";
function App(){
  const [query, setQuery] = useState("");
  //query gets the value of the input field amd setQuery sets the value each time the input field changes
  const searchUsers = (data) => {
  return data.filter(item => 
   item.first_name.toLowerCase().includes(query)||
   item.last_name.toLowerCase().includes(query)||
   item.email.toLowerCase().includes(query))
  }

  return (

    <div className="app">
    <input type="text" className="search" placeholder="Search" onChange={e=>setQuery(e.target.value)}></input>
    
    <Table data ={searchUsers(Users)}/>
    </div>

  )

}
export default App;