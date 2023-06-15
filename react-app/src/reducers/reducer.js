const SET_CHOSEN ="SET_CHOSEN"
const ADD_PAGE = "ADD_PAGE"
let initialState = {
    chosenPage: 0,
    tree: [],
    test: "test"
}

const mainReducer = (state=initialState, action) =>{
    let newState = {...state}
    switch(action.type){
        case(SET_CHOSEN):
            newState.chosenPage=action.id
            return newState
        case(ADD_PAGE):
            action.id==0? newState.tree.push({children:[],name:"New Page",id:crypto.randomUUID()}): findAndModifyElement(newState.tree, action.id)
            return newState
        default:
            return newState;
    }
}
export function addElemActionCreator(id){
    return {type:ADD_PAGE, id:id}
}
export function chooseNodeActionCreator(id){
    return {type:SET_CHOSEN, id:id}
}
export default mainReducer;

function findAndModifyElement(tree, targetId) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].id === targetId) {
        tree[i].children.push({children:[],name:"New Page",id:crypto.randomUUID()})
        return true; 
      }
      if (tree[i].children && tree[i].children.length > 0) {
        if (findAndModifyElement(tree[i].children, targetId)) {
          return true; 
        }
      }
    }
    return false; 
  }