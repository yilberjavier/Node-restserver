const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRolValido = async (rol = "") => {
    const exiteRol = await Role.findOne({ rol });
    if (!exiteRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
};



const emailExiste = async (correo = '') => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado`);
    }
}



const existeUsuarioPorId = async ( id ) => {
    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById( id );
    if ( !existeUsuario ) {
        throw new Error(`El id no existe: ${id} `);
    }
}




module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}

