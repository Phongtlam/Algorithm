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

// class Node for doubly linked list
class Node {
	constructor(key, value) {
			this.key = key;
			this.value = value;
			this.next = this.prev = null;
	}
}

class LRUCache {
	constructor(capacity) {
			this.capacity = capacity;
			this.hash = {};
			// blank nodes for head and tail
			this.head = new Node();
			this.tail = new Node();
			// at the start tail and head will be connected
			this.head.next = this.tail;
			this.tail.prev = this.head;
	}
	
	put(key, value) {
			let node = this.hash[key];
			// if node does not exist, we need to make a new node and decrease capacity
			if (node === undefined) {
					this.capacity -= 1;
					node = this.hash[key] = new Node(key, value);
			// else we just need to change node value to new value
			} else {
					node.value = value;
			}
			// move node to tail since it's just accessed recently
			this.pushNodeToTail(node);

			// if capacity drops below 0, we need to remove node at head
			if (this.capacity < 0) {
					// get deleted key to remove and delete it from the hash
					let delKey = this.head.next.key;
					delete this.hash[delKey];
					
					// remove least recent used node from head, attach head.next to the value
					this.head.next = this.head.next.next;
					this.head.next.prev = this.head;
					
					// increase capacity back since we just remove a node
					this.capacity++;
			}
	}
	
	get(key) {
			if (this.hash[key] === undefined) return -1;
			const node = this.hash[key];
			
			// only need to do this if node is not already at tail end
			if (node.next !== this.tail) {
					this.pushNodeToTail(node);
			}
			return node.value;
	}
	
	// helper method to put new nodes sor existing nodes to end of the list
	pushNodeToTail(node) {
			// if node is already in the list, we reattach its prev and next node before removal
			if (node.next && node.prev) {
					node.next.prev = node.prev;
					node.prev.next = node.next;
			}
			// attach node to tail
			node.next = this.tail;
			node.prev = this.tail.prev;
			this.tail.prev.next = node;
			this.tail.prev = node;
	}
}
