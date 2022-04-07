import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import refeicaoController from "./controllers/RefeicaoController";
import pedidoController from "./controllers/PedidoController";
import clienteController from "./controllers/ClienteController";
import multer from "multer";
import uploadConfig from "./config/uploads";
import passport from "passport";
import session from "express-session";

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuario', usuarioController.index);
routes.get('/usuario/:id', usuarioController.show);
routes.post('/usuario', usuarioController.create);
routes.put('/usuario/:id', usuarioController.update);
routes.delete('/usuario/:id', usuarioController.delete);
routes.post('/usuario/login', usuarioController.login);

routes.get('/refeicao/:id', refeicaoController.index);
routes.get('/refeicao/:id', refeicaoController.show);
routes.post('/refeicao', upload.array('imagem'), refeicaoController.create);
routes.put('/refeicao/:id', upload.array('imagem'), refeicaoController.update);
routes.delete('/refeicao/:id', refeicaoController.delete);

routes.get('/pedido/:id', pedidoController.index);
routes.get('/pedido/:id', pedidoController.show);
routes.post('/pedido', pedidoController.create);
routes.put('/pedido/:id', pedidoController.update);
// routes.delete('/pedido/:id', pedidoController.delete);

routes.get('/cliente', clienteController.index);
routes.get('/cliente/:id', clienteController.show);
routes.post('/cliente', clienteController.create);
routes.put('/cliente/:id', clienteController.update);
routes.post('/cliente/login', clienteController.login);
// routes.post('/cliente/login2', passport.authenticate('local'));
// routes.post('/cliente/login2', clienteController.login2);

export default routes;
