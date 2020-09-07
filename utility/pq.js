class PQ {
  constructor(comparator) {
    this.comparator = comparator;
    this.arr = [];
  }

  parent(i) {
    return Math.floor(i / 2);
  }

  left(i) {
    return 2 * i;
  }

  right(i) {
    return this.left(i) + 1;
  }

  swap(i, j) {
    const t = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = t;
  }

  push(element) {
    this.arr.push(element);
    this.moveUp(this.arr.length - 1);
  }

  pop() {
    this.swap(0, this.arr.length - 1);
    const res = this.arr.pop();
    this.moveDown(0);
    return res;
  }

  get size() {
    return this.arr.length;
  }

  peek() {
    return this.arr[0] || null;
  }

  moveDown(i) {
    const left = this.left(i);
    const right = this.right(i);
    const isValid =
      (left > this.arr.length - 1 || this.comparator(this.arr[i], this.arr[left])) &&
      (right >= this.arr.length || this.comparator(this.arr[i], this.arr[right]));
    if (!isValid) {
      const next = right >= this.arr.length || this.comparator(this.arr[left], this.arr[right]) ? left : right;
      this.swap(i, next);
      this.moveDown(next);
    }
  }

  moveUp(i) {
    const p = this.parent(i);
    const isValid = p < 0 || this.comparator(this.arr[p], this.arr[i]);
    if (!isValid) {
      this.swap(i, p);
      this.moveUp(p);
    }
  }
}
