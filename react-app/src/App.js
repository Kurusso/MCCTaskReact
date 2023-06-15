import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TreeNode from './components/TreeNode';
import { useDispatch, useSelector } from 'react-redux';
import { addElemActionCreator } from './reducers/reducer';

function App() {
  const state = useSelector(state=>state.mainPage)
  const dispatch = useDispatch()
  console.log(state)
  const addElem = () =>{
    dispatch(addElemActionCreator(state.chosenPage))
  }
  return (
    <div className="App">
      {

      state.tree!=null && state.tree.map((value)=>{
        return <TreeNode children={value.children} id={value.id} name={value.name}/>
      })

      }
      <button onClick={addElem}>Add</button>
    </div>
  );
}

export default App;
