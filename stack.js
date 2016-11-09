function Stack() {
  this.size = 0;
  this.storage = {};
}

Stack.prototype.push = function(data) {
  var size = this.size++;
  this.storage[size] = data;
}

Stack.prototype.pop = function() {
  var size = this.size;
  var deleted;
  if (size) {
    deleted = this.storage[size-1];
    delete this.storage[size-1];
    size = this.size--;
    return deleted;
  }
}

Stack.prototype.getSize = function() {
  return this.size;
}
