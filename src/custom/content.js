var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports =
  '# Introduction\n' +
  fs.readFileSync('./content/introduction.md', 'utf8') + '\n' +
  '# Users\n' +
  fs.readFileSync('./content/users.md', 'utf8') + '\n' +
  '# Sessions\n' +
  fs.readFileSync('./content/sessions.md', 'utf8') + '\n' +
  '# Events\n' +
  fs.readFileSync('./content/events.md', 'utf8') + '\n' +
  '# Comments\n' +
  fs.readFileSync('./content/comments.md', 'utf8') + '\n' +
  '# Recommendations\n' +
  fs.readFileSync('./content/recommendations.md', 'utf8') + '\n';