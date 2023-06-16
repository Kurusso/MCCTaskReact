import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseNodeActionCreator } from "../reducers/reducer";
import { Card } from "react-bootstrap";
function TreeNode(props) {
    const state = useSelector(state=>state.mainPage)
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(""); 
    const setId = () =>{
        if(isSelected===""){
        dispatch(chooseNodeActionCreator(props.id, props.name))
        setIsSelected("info")
        }
        else{
            dispatch(chooseNodeActionCreator(0, ""))
            setIsSelected("")
        }
    }
    useEffect(()=>{
        if(state.chosenPage !== props.id){
        setIsSelected("")
        }
    },[state.chosenPage, props.id])
    return(
        <div style={{ marginLeft: '40px' }}>
      <Card style={{width:'300px'}} bg={isSelected} onClick={setId}>
        <Card.Body>{props.name}</Card.Body>
      </Card>

      {props.children != null && props.children.map((value) => (
        <TreeNode children={value.children} id={value.id} name={value.name} />
      ))}
    </div>
    )
}
export default TreeNode;