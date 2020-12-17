import React, {useState} from 'react'
import Search from './Components/Search'
import './App.css'
import { API,KEY } from './Service'
import List from './Components/List'


export default function App() {
  const [data, setData] = useState()
 
  const searchByName = async (name) =>{
    let resp = await fetch(API+name+KEY)
    let dat = await resp.json()
    setData(dat)
    console.log(dat)
  }

  return (
    <div>
        <Search
          searchByName={searchByName}
        />

        <List
          data={data}
        />
    </div>
  )
}