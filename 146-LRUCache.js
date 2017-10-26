// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
//
// Follow up:
// Could you do both operations in O(1) time complexity?
//
// Example:
//
// LRUCache cache = new LRUCache( 2 /* capacity */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// This is a tough problem. Personally I attempted at it once before and never got
// the working solution. The idea behind it is simple, much of the difficulty lies in
// the actual implementation.

// So a few things to consider
// 1. Need to be O(1) in all operations
// 2. The cache is like a queue, first in first out

// Actual implementation: have a hash table for instant look up. Removal and insertion
// we will use a doubly linked list. My implementation involves having head and tail as
// pseudo nodes with pointers, that way it will be simple with removal and insertion.

function Node(key, val) {
    this.key = key;
    this.val = val;
    this.prev = this.next = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.head = { next: null }
    this.tail = { prev: null }
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key) {
    var currNode = this.hash[key];
    if (currNode === undefined) return -1;
    if (currNode.next !== this.tail) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = this.tail;
        currNode.prev = this.tail.prev;
        this.tail.prev.next = currNode;
        this.tail.prev = currNode;
    }
    return currNode.val;
};

LRUCache.prototype.put = function(key, val) {
    if (this.hash[key] === undefined) {
      this.capacity -= 1;
      this.hash[key] = new Node(key, val);
      var newNode = this.hash[key];
    } else {
      this.hash[key].val = val;
      newNode = this.hash[key];
      newNode.prev.next = newNode.next;
      newNode.next.prev = newNode.prev;
      newNode.next = newNode.prev = null;
    }
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    if (this.capacity < 0) {
        var delK = this.head.next.key;
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;

        delete this.hash[delK];

        this.capacity++;
    }
};
