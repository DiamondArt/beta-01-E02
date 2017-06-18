const testLoop = ($, test, name, stmt) => test(`${name} is not used`)
  .value($(stmt).length)
  .equal(0, `Use recursion instead of ${name}`)

module.exports = ({ describe, test, $ }) => [
  describe('BONUS', [
    testLoop($, test, 'for', 'ForStatement'),
    testLoop($, test, 'for..of', 'ForOfStatement'),
    testLoop($, test, 'for..in', 'ForinStatement'),
    testLoop($, test, 'while', 'WhileStatement'),
  ].concat($('arrow').map(def =>
    test(`function line ${def.loc.start.line} column ${
      def.loc.start.column} is a single expression`)
      .value(def.body.type)
      .notEqual('BlockStatement')))),
]
