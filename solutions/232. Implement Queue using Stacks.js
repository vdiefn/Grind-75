var MyQueue = function() {
  this.stackIn = []
  this.stackOut = []
};

MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

MyQueue.prototype.pop = function() {
  if(this.stackOut.length === 0) {
    while(this.stackIn.length > 0) {
      const item = this.stackIn.pop()
      this.stackOut.push(item)
    }
  }
  return this.stackOut.pop()
}

MyQueue.prototype.peek = function() {
  if(this.stackOut.length === 0) {
    while(this.stackIn.length > 0){
      const item = this.stackIn.pop()
      this.stackOut.push(item)
    }
  }
  return this.stackOut.at(-1)
}

MyQueue.prototype.empty = function() {
  return this.stackIn.length === 0 && this.stackOut.length === 0
}