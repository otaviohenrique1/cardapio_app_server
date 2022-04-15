import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import refeicaoController from "./controllers/RefeicaoController";
import pedidoController from "./controllers/PedidoController";
import clienteController from "./controllers/ClienteController";
import administradorController from "./controllers/AdministradorController";
import empresaController from "./controllers/EmpresaController";
import multer from "multer";
import uploadConfig from "./config/uploads";
// import passport from "passport";
// import session from "express-session";

const routes = Router();
const upload = multer(uploadConfig);

/**
 * Rotas do usuario (empresa cliente do sistema)
 */
routes.get('/usuario', usuarioController.index);
routes.get('/usuario/:id', usuarioController.show);
routes.post('/usuario', usuarioController.create);
routes.put('/usuario/:id', usuarioController.update);
routes.delete('/usuario/:id', usuarioController.delete);
routes.post('/usuario/login', usuarioController.login);

/**
 * Rotas da refeicao
 */
routes.get('/refeicao/cardapio/:id', refeicaoController.index);
routes.get('/refeicao/:id', refeicaoController.show);
routes.post('/refeicao', upload.array('imagem'), refeicaoController.create);
routes.put('/refeicao/:id', upload.array('imagem'), refeicaoController.update);
routes.delete('/refeicao/:id', refeicaoController.delete);

/**
 * Rotas do pedido
 */
routes.get('/pedido/:id', pedidoController.index);
routes.get('/pedido/:id', pedidoController.show);
routes.post('/pedido', pedidoController.create);
routes.put('/pedido/:id', pedidoController.update);
// routes.delete('/pedido/:id', pedidoController.delete);

/**
 * Rotas do cliente (Clientes da empresa cliente)
 */
routes.get('/cliente', clienteController.index);
routes.get('/cliente/:id', clienteController.show);
routes.post('/cliente', clienteController.create);
routes.put('/cliente/:id', clienteController.update);
routes.post('/cliente/login', clienteController.login);
// routes.post('/cliente/login2', passport.authenticate('local'));
// routes.post('/cliente/login2', clienteController.login2);

/**
 * Rotas do administrador (Empresa que vende o sistema)
 */
routes.get('/administrador', administradorController.index);
routes.get('/administrador/:id', administradorController.show);
routes.post('/administrador', administradorController.create);
routes.put('/administrador/:id', administradorController.update);
// routes.delete('/administrador/:id', administradorController.delete);
routes.post('/administrador/login', administradorController.login);

/**
 * Rotas da empresa (Teste)
 */
routes.get('/empresa', empresaController.index);
routes.get('/empresa/:id', empresaController.show);
routes.post('/empresa', empresaController.create);
routes.put('/empresa/:id', empresaController.update);
// routes.delete('/empresa/:id', empresaController.delete);
routes.post('/empresa/login', empresaController.login);

export default routes;
