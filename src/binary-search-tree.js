const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(data) {
    this.roots = add_node(this.roots, data);
    function add_node(node,data)
    {
      if (!node){ return new Node(data);}
      if (node.data == data) {return node;}
      if (data < node.data) { node.left = add_node(node.left, data);}
      if (data > node.data) { node.right = add_node(node.right, data);}
      return node;
    }
  }


  has(data) {
    return check_item(this.roots, data);
    function check_item(node, data)
    {
      if (!node){ return false;}
      if (node.data === data) {return true;}
      if (data < node.data) { return check_item(node.left, data);}
      if (data > node.data) { return check_item(node.right, data);}
    }
  }

  find(data) {
    return check_item(this.roots, data);
    function check_item(node, data)
    {
      if (!node){ return null;}
      if (node.data === data) {return node;}
      if (data < node.data) { return check_item(node.left, data);}
      if (data > node.data) { return check_item(node.right, data);}
    }
  }

  remove(data) {
    this.roots = removedata(this.roots, data);
    function removedata(node,data)
    {
      if (!node){ return null;}
      if (data < node.data) { node.left = removedata(node.left, data); return node;}
      else if (data > node.data) { node.right = removedata(node.right, data); return node;}
      else 
      {
        if (!node.left && !node.right) {return null;}
        if (!node.left) {node = node.right; return node;}
        if (!node.right) {node = node.left; return node;}

        let minFromRight = node.right;
        while(minFromRight.left)
        {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removedata(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.roots) {return null;}
    let node = this.roots;
    while(node.left)
    {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.roots) {return null;}
    let node = this.roots;
    while(node.right)
    {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};