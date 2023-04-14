const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');



class BinarySearchTree
 {
  
    constructor()
    {
      this.roots=null;
    }

  root() 
  {
    return this.roots;   
  }

  

  add(value)
   {
   this.roots=addValue(this.roots,value);
    function addValue(node,value)
    {
      if(!node){return new  Node(value);}
      if(node.value==value){return node;}
      if(value<node.value){node.left=addValue(node.left,value);}
      if(value>node.value){node.right=addValue(node.right,value);}
      return node;
    }
  }
  

  has(value)
  {
    function searchValue(node,val)
    {
      if(!node){return false;}
      else if(node.value==val){return true;}
      else if(val<node.value){return searchValue(node.left,val);}
      else{return searchValue(node.right,val);}
    }
    return searchValue(this.roots,value);
   
  }

  find(val) 
  {
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};