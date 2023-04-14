const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

 constructor()
 {
  this.count = 0;
  this.massive = {};
 }
  push(element) 
  {
    this.massive[this.count] = element;
    this.count++;
  }

  pop() 
  {
    if (this.count === 0) return undefined;
        this.count--;
        let result = this.massive[this.count];
        delete this.massive[this.count];
        return result;
  }

  peek() {
    return this.massive[this.count - 1];
  }
}

module.exports = {
  Stack
};


