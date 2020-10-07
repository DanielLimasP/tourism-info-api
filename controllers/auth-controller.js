const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      {
        res.json({
          error: err,
        });
      }
    }

    let user = new User({
      nombre: req.body.nombre,
      email: req.body.email,
      contraseña: hashedPass,
    });

    user
      .save()
      .then((user) => {
        res.json({
          message: "Usuario creado correctamente",
        });
      })
      .catch((error) => {
        res.json({
          message: "Ha ocurrido un error",
        });
      });
  });
};

const login = (req, res, next) => {
    var email = req.body.email
    var contraseña = req.body.contraseña

    User.findOne({$or: [{email: email}]})
    .then(user => {
        if(user){
            bcrypt.compare(contraseña, user.contraseña, function(err, result) {
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Inicio de sesion exitoso',
                        token
                    })
                }
                else{
                    res.json({
                        message: 'La contrasena es incorrecta'
                    })
                }

            })
        }else{
            res.json({
                message: 'No se encontro el usuario'
            })
        }
    })
}

module.exports = {
  register, login
};
