'use strict';

module.exports = function (source) {
  let content = 'import { FluentResource } from \'@fluent/bundle\';\n\n';
  content += 'export default new FluentResource(\`';
  content += source;
  content += '\`)';

  return content;
}
