import { useDispatch, useSelector } from "react-redux"
import { submit,change,remove } from "./actions"

function Todo(){
    let dispatch=useDispatch()
    let select=useSelector((state)=>{
        return state
    })

    console.log(select.arr);

    function chn(e){
        dispatch(change(e))
    }
    

    function sub(e){
        e.preventDefault()
        dispatch(submit(e))
    }

    function del(val,ind){
        dispatch(remove(val,ind))
    }

    let res=select.arr.map((val,ind)=>{
        return (
            <ul key={ind}>
                <li>{val}
                    <button onClick={()=>{
                        del(val,ind)
                    }}>Delete</button>
                    
                </li>
            </ul>
        )
    })

    return (
        <>
        <form action="" onSubmit={sub}>
            <input type="text" onChange={chn} value={select.str} />
            <input type="submit" value="Add" />
        </form>

        {res}
        </>
    )
}

export default Todo