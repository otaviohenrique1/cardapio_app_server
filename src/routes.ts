import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import refeicaoController from "./controllers/RefeicaoController";

const routes = Router();

routes.get('/usuario', usuarioController.index);
routes.get('/usuario/:id', usuarioController.show);
routes.post('/usuario', usuarioController.create);
routes.put('/usuario/:id', usuarioController.update);
routes.delete('/usuario/:id', usuarioController.delete);
routes.post('/usuarios/login', usuarioController.login);

routes.get('/refeicao', refeicaoController.index);
routes.get('/refeicao/:id', refeicaoController.show);
routes.post('/refeicao', refeicaoController.create);
routes.put('/refeicao/:id', refeicaoController.update);
routes.delete('/refeicao/:id', refeicaoController.delete);

export default routes;
