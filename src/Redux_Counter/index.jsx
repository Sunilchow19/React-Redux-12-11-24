import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement } from "./actions"

function Counter(){

    let dispatch=useDispatch()
    let select=useSelector((state)=>{
        return state   
    })    

    function inc(){
        dispatch(Increment())
    }
    function dec(){
        dispatch(Decrement())
    }


    return (
        <>
        <h1>Counter</h1>
        <h1>{select.count}</h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
        </>
    )
}

export default Counter