import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import refeicaoController from "./controllers/RefeicaoController";
import pedidoController from "./controllers/PedidoController";
import multer from "multer";
import uploadConfig from "./config/uploads";

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuario', usuarioController.index);
routes.get('/usuario/:codigo', usuarioController.show);
routes.post('/usuario', usuarioController.create);
routes.put('/usuario/:codigo', usuarioController.update);
routes.delete('/usuario/:codigo', usuarioController.delete);
routes.post('/usuario/login', usuarioController.login);

routes.get('/refeicao/:codigo', refeicaoController.index);
routes.get('/refeicao/:codigo', refeicaoController.show);
routes.post('/refeicao', upload.array('imagem'), refeicaoController.create);
routes.put('/refeicao/:codigo', upload.array('imagem'), refeicaoController.update);
routes.delete('/refeicao/:codigo', refeicaoController.delete);

routes.get('/pedido/:codigo', pedidoController.index);
routes.get('/pedido/:codigo', pedidoController.show);
routes.post('/pedido', pedidoController.create);
routes.put('/pedido/:codigo', pedidoController.update);
// routes.delete('/pedido/:codigo', pedidoController.delete);

export default routes;
