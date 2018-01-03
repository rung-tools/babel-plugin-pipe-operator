export default ({types: t}) => {
  const hasDirective = (path, directive) =>
    !!path.findParent(({ node }) =>
      node.directives && node.directives.some(({ value }) => value.value === directive))

  return {
    visitor: {
      BinaryExpression(path) {
        if (!path.isBinaryExpression({ operator: "|" }) || hasDirective(path, 'no pipe')) {
            return
        }

        const args = t.isSequenceExpression(path.node.left) ? path.node.left.expressions : [path.node.left];
        path.replaceWith(t.callExpression(t.parenthesizedExpression(path.node.right), args))
      }
    }
  }
}
