import React, { useContext } from 'react'
import { AppContext } from '../App';



const List = () => {
    let { Order,setOrder } = useContext(AppContext);
    const  handleClick= ()=>{
        setOrder(Order+1);
    }
  return (
    <div>
        <ul>
            <li>item1 <button onClick={handleClick}>Add</button></li>
            <li>item2 <button onClick={handleClick}>Add</button></li>
            <li>item3 <button onClick={handleClick}>Add</button></li>
            <li>item4 <button onClick={handleClick}>Add</button></li>  
            <li>item5 <button onClick={handleClick}>Add</button></li>
        </ul>
    </div>
  )
}

export default List