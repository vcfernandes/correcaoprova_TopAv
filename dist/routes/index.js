"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _UserControllers_1 = __importDefault(require("../controllers/ UserControllers"));
const routes = express_1.default.Router();
routes.get('usuario/listar', _UserControllers_1.default.listar /**  */);
routes.get('usuario/id', _UserControllers_1.default.buscarId /**  */);
routes.post('usuario/idade', _UserControllers_1.default.buscarIdade /**  */);
routes.post('usuario/sexo', _UserControllers_1.default.buscarSexo /**  */);
// continuar aqui
exports.default = routes;
