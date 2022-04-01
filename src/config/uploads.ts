// import { request } from "express";
import multer from "multer";
import path from "path";
import crypto from 'crypto';
import fs from "fs";
// import { slug } from "./utils";

/* arrumar parte do nome do arquivo */
export default {
  storage: multer.diskStorage({
    destination: function (request, file, cb) {
      const { id, codigo } = request.body
      const fileDestination = path.join(__dirname, '..', '..', 'uploads', 'fotos', `${codigo}_${id}`);
      fs.mkdirSync(fileDestination, { recursive: true })
      // const fileDestination = path.join(__dirname, '..', '..', 'uploads', 'fotos');
      cb(null, fileDestination);
    },
    filename: (request, file, cb) => {
      const { id, codigo } = request.body

      const nomeDoArquivo = file.originalname;
      const fileName = `${id}-${codigo}-${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${nomeDoArquivo}`;
      // const fileName = `${id}-${codigo}-${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${slug(nomeDoArquivo)}`;
      // const fileName = `${crypto.randomBytes(3).toString('hex')}-${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
};

/*
import multer from 'multer'
import crypto from 'crypto'
import { extname } from 'path'
import slug from 'slug'
import fs from 'fs'

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const { id } = req.body
      const path = `./uploads/gallery/${id}`
      fs.mkdirSync(path, { recursive: true })
      return cb(null, path)
    },
    filename: (req, file, cb) => {
      const { description } = req.body

      crypto.randomBytes(3, (err, res) => {
        if (err) return cb(err)

        return cb(null, slug(description, { lower: true }) + '_' + res.toString('hex') + extname(file.originalname))
      })
    }
  })
}
*/
/*
Você deve usar mkdirSync apenas se o diretório não existir (você pode existsSync funcionar que retorna um booleano).
*/
