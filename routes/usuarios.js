const express = require('express');
const router = express.Router();
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');



router.get("/", usuariosGet );

router.put("/:id", usuariosPut );

router.post("/", usuariosPost );

router.patch("/", usuariosPatch );

router.delete("/", usuariosDelete );







module.exports = router;
