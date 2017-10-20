// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia:
// “The lowest common ancestor is defined between two nodes v and w as the lowest node in T
// that has both v and w as descendants (where we allow a node to be a descendant of itself).”
//
//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6.
// Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// This is a good problem to understand BST traversal.
// If the root value is greater than both q.val and p.val,
// we need to travel to the left, else travel to the right recursively.
// When they are all equal then we know we have found the common ancestor.

var lowestCommonAncestor = (root, p, q) => {
  if (!root) return;
  if (!p && !q) return;
  if (!p || !q) return;
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q)
  } else if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q)
  } else {
      return root;
  }
}
