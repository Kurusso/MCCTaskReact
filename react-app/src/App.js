import './App.css';
import TreeNode from './components/TreeNode';
import { useDispatch, useSelector } from 'react-redux';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { addElemActionCreator, deleteElemActionCreator, chooseNodeActionCreator, changeNameIsChangingActionCreator, setNameToChangeActionCreator, assertNameToChangeActionCreator, resetActionCreator } from './reducers/reducer';

function App() {
  const state = useSelector(state=>state.mainPage)
  const dispatch = useDispatch()
  const addElem = () =>{
    dispatch(addElemActionCreator(state.chosenPage))
  }

  const deleteElem = () =>{
    dispatch(deleteElemActionCreator(state.chosenPage))
    dispatch(chooseNodeActionCreator(0))
  }
  const editName = () =>{
    dispatch(changeNameIsChangingActionCreator())
  }
  const handleChange = (event) =>{
    dispatch(setNameToChangeActionCreator(event.target.value))  
  }
  const handleKeyDown = (event) =>{
    if (event.key === "Enter") {
      dispatch(assertNameToChangeActionCreator(state.nameToChange))
      }
  }
  const reset = () => {
    dispatch(resetActionCreator())
  }
  return (
    <div className="App ">
      <h5 className='margintop d-flex justify-content-center align-items-center'>Tree</h5>
      <div className='margintop d-flex justify-content-center align-items-center'>
        <div className='scrollable-container padding5'>
        {state.tree != null && state.tree.map((value) => (
          <TreeNode children={value.children} id={value.id} name={value.name} />
        ))}
      </div>
    </div>
      <div className=" button-container margintop d-flex justify-content-center align-items-center">
        <Button className='margin-sides'  variant="primary" onClick={addElem}>Add</Button>
        <Button className='margin-sides' variant="danger" onClick={deleteElem}>Remove</Button>
        <Button className='margin-sides' variant="info" onClick={editName}>Rename</Button>
        <Button className='margin-sides' variant="warning" onClick={reset}>Reset</Button>
      </div>
      <div className=" margintop d-flex justify-content-center align-items-center">
      {state.condition && (
          <InputGroup  style={{width:'285px'}} className="mb-3">
            <FormControl
              placeholder="Choose element"
              value={state.nameToChange}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </InputGroup>
        )}
      </div>
    </div>
    
  );
}


export default App;
