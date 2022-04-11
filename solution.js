//Dependencies
const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  };
};

class Stack{
  constructor(top = null){
    this.top = top;
  };
  /////////////////// Stack Methods////////////////
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  };

  pop(){
    if(this.top === null){
      throw new Error("The stack is empty");
    };
    let temp = this.top;
    if(temp){
      let newTemp = temp.next;
      this.top = newTemp;
      return temp;
    }
  };

  size(){
    let count = 0;
    let temp = this.top;
    while(temp){
      count++;
      temp = temp.next;
    };
    return count;
  };

  isEmpty(){
    return this.top === null;
  };

  findMin(){
    let temp = this.top;
    let min = temp.data;
    while(temp){
      if(min > temp.data){
        min = temp.data;
      };
      temp = temp.next;
    };
    return min;
  };

  peek(){

  };

  sort(){

  };

};

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  };

  ////////////// Queue Methods/////////////////
  enqueue(){
    
  };

  dequeue(){

  };


}



module.exports = {
  Node,
  Queue,
  Stack,
};
