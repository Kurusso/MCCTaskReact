import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseNodeActionCreator } from "../reducers/reducer";
import { Button, Card } from "react-bootstrap";
function TreeNode(props) {
    const state = useSelector(state=>state.mainPage)
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(""); 
    const [isExpanded, setIsExpanded] = useState(true);
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
    const toggleExpand = (event) => {
      setIsExpanded((prevExpanded) => !prevExpanded);
      event.stopPropagation();
  };
    useEffect(()=>{
        if(state.chosenPage !== props.id){
        setIsSelected("")
        }
    },[state.chosenPage, props.id])
    return(
        <div style={{ marginLeft: '40px' }}>
      <Card style={{width:'300px'}} bg={isSelected} onClick={setId}>
        <Card.Body>{props.name} 
        {props.children.length !=0 && (
                <Button style={{marginLeft:'20px'}} onClick={toggleExpand}>
                    {isExpanded ? "Скрыть" : "Показать"} 
                </Button>
            )}
        </Card.Body>
      </Card>
      <div style={{display: isExpanded ? 'block' : 'none' }}>
      {props.children != null && props.children.map((value) => (
        <TreeNode children={value.children} id={value.id} name={value.name} key={value.id}/>
      ))}
      </div>
    </div>
    )
}
export default TreeNode;