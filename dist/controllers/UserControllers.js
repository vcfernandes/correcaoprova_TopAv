"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users = require('../users.json');
const Lista = require('../users.json');
const BuscarIdade = require('../users.json');
const BuscarSexo = require('../users.json');
const BuscarId = require('../users.json');


exports.default = {
    index(request, response) {
        console.log(Users);
    },
};
