import { Router } from "express";
import usuarioController from "./controllers/UsuarioController";
import refeicaoController from "./controllers/RefeicaoController";
import multer from "multer";
import uploadConfig from "./config/uploads";

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuario', usuarioController.index);
routes.get('/usuario/:id', usuarioController.show);
routes.post('/usuario', usuarioController.create);
routes.put('/usuario/:id', usuarioController.update);
routes.delete('/usuario/:id', usuarioController.delete);
routes.post('/usuario/login', usuarioController.login);

routes.get('/refeicao', refeicaoController.index);
routes.get('/refeicao/:id', refeicaoController.show);
routes.post('/refeicao', upload.array('imagem'), refeicaoController.create);
routes.put('/refeicao/:id', upload.array('imagem'), refeicaoController.update);
routes.delete('/refeicao/:id', refeicaoController.delete);

export default routes;
