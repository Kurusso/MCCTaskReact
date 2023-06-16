
import { findAndModifyElement, findAndRemoveElement, findAndAddElement } from "../auxiliary/auxiliary-functions"

const SET_CHOSEN ="SET_CHOSEN"
const ADD_PAGE = "ADD_PAGE"
const DELETE_PAGE = "DELETE_PAGE"
const SET_CONDITION = "SET_CONDITION"
const SET_CHANGE_NAME = "SET_CHANGE_NAME"
const ASSERT_CHANGE_NAME = "ASSERT_CHANGE_NAME"
const RESET = "RESET"
let initialState = {
    chosenPage: 0,
    tree: [],
    nameIsChanging: false,
    nameToChange: ""
}

const mainReducer = (state=initialState, action) =>{
    let newState = {...state}
    switch(action.type){
        case(SET_CHOSEN):
          newState.chosenPage=action.id
          newState.nameToChange=action.name
          return newState
        case(ADD_PAGE):
          action.id===0? newState.tree.push({children:[],name:"New Page",id:crypto.randomUUID()}): findAndAddElement(newState.tree, action.id)
          return newState
        case(DELETE_PAGE):
          if (action.id!==0) { findAndRemoveElement(newState.tree, action.id)}
            return newState
        case(SET_CONDITION):
          newState.condition=!newState.condition
          return newState
        case(SET_CHANGE_NAME):
          newState.nameToChange=action.value
          return newState
        case(ASSERT_CHANGE_NAME):
          findAndModifyElement(newState.tree, newState.chosenPage, action.value)
          return newState
        case(RESET):
          newState.chosenPage=0
          newState.tree = []
          newState.nameIsChanging = false
          newState.nameToChange = ""
          return newState
        default:
          return newState;
    }
}
export function addElemActionCreator(id){
    return {type:ADD_PAGE, id:id}
}
export function chooseNodeActionCreator(id, name){
    return {type:SET_CHOSEN, id:id, name:name}
}
export function deleteElemActionCreator(id){
    return {type:DELETE_PAGE, id:id}
}
export function changeNameIsChangingActionCreator(){
  return {type: SET_CONDITION}
}
export function setNameToChangeActionCreator(value){
  return {type:SET_CHANGE_NAME, value:value}
}
export function assertNameToChangeActionCreator(value){
  return {type:ASSERT_CHANGE_NAME, value:value}
}
export function resetActionCreator() {
  return {type:RESET}
}
export default mainReducer;
