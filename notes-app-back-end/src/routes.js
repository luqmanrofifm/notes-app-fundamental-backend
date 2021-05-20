/* eslint-disable linebreak-style */
/* eslint-disable indent */

const { addNoteHandler } = require("./handler");

const routes = [
  {method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    },
  ];
// eslint-disable-next-line eol-last
module.exports = routes;