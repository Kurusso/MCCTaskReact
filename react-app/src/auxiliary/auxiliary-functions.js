export function findAndAddElement(tree, targetId) {

    for (let i = 0; i < tree.length; i++) {
      if (tree[i].id === targetId) {
        tree[i].children.push({children:[],name:"New Page",id:crypto.randomUUID()})
        return true; 
      }
      if (tree[i].children && tree[i].children.length > 0) {
        if (findAndAddElement(tree[i].children, targetId)) {
          return true; 
        }
      }
    }
  }

 export function findAndRemoveElement(tree, targetId) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].id === targetId) {
        tree.splice(i, 1); 
        return true; 
      }
      if (tree[i].children && tree[i].children.length > 0) {
        if (findAndRemoveElement(tree[i].children, targetId)) {
          return true; 
        }
      }
    }
  }

 export function findAndModifyElement(tree, targetId, newName) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].id === targetId) {
        tree[i].name = newName;
        return true; 
      }
      if (tree[i].children && tree[i].children.length > 0) {
        if (findAndModifyElement(tree[i].children, targetId, newName)) {
          return true; 
        }
      }
    }
  }