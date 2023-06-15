import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseNodeActionCreator } from "../reducers/reducer";

function TreeNode(props) {
    const state = useSelector(state=>state.mainPage)
    const dispatch = useDispatch()
    const setId = () =>{
        dispatch(chooseNodeActionCreator(props.id))
    }
    return(
        <div style={{marginLeft:'40px'}}>
            <div onClick={setId}>{props.name}</div>
            {

            props.children!=null && props.children.map((value)=>{
            return <TreeNode children={value.children} id={value.id} name={value.name}/>
            })

            }

        </div>
    )
}
export default TreeNode;