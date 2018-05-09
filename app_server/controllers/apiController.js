var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var PartidoFaseFinal = mongoose.model('PartidoFaseFinal');

var addPronosticoFaseFinal = (req, res) => {

}

var addPronostico = (req, res) => {
  Grupo.findOne({"equipos.nombre": req.body.equipo1})
  .then((grupo) => {
    var partidosGrupo = grupo.partidos;
    partidosGrupo.forEach((partido) => {
      if (partido.equipo1 === req.body.equipo1 && partido.equipo2 === req.body.equipo2) {
        var pronostico = {
          user: req.body.user
        }
        var pronosticosPartido = partido.pronosticos;
        var existePronostico = false;
        pronosticosPartido.forEach((pronosticoPartido) => {
          if (pronosticoPartido.user === req.body.user) {
            pronostico = pronosticoPartido;
            existePronostico = true;
          }
        });
        pronostico.golesEquipo1 = req.body.golesEquipo1;
        pronostico.golesEquipo2 = req.body.golesEquipo2;
        if (!existePronostico)
          partido.pronosticos.push(pronostico);
        grupo.save().then((doc) => {
          res.send(pronostico);
        }, (e) => {
          console.log(e);
        });
      }
    });
  }).catch((e) => {
    res.status(404).send("La página solicitada no existe.");
  });
}

var deletePronostico = (req, res) => {
  Grupo.findOne({"equipos.nombre": req.body.equipo1})
  .then((grupo) => {
    var partidosGrupo = grupo.partidos;
    partidosGrupo.forEach((partido) => {
      if (partido.equipo1 === req.body.equipo1 && partido.equipo2 === req.body.equipo2) {
        var pronosticosPartido = partido.pronosticos;
        pronosticosPartido.forEach((pronosticoPartido) => {
          if (pronosticoPartido.user === req.body.user) {
            pronosticoPartido.remove();
          }
        });
        grupo.save().then(() => {
          res.send('Pronostico eliminado');
        }, (e) => {
          console.log(e);
        });
      }
    });
  }).catch((e) => {
    res.status(404).send("La página solicitada no existe.");
  });
}

var getDescripcionEquipo = (req, res) => {
  Grupo.findOne({"equipos.nombre": req.params.equipo})
  .then((grupo) => {
    var equiposGrupo = grupo.equipos;
    equiposGrupo.forEach((equipo) => {
      if (equipo.nombre === req.params.equipo) {
        res.send(equipo.descripcion);
      }
    });
  })
  .catch((e) => {
      res.status(404).send("La página solicitada no existe.");
  });
}

var cargarResultadoGrupo = (req, res) => {
  Grupo.findOne({"equipos.nombre": req.body.equipo1})
  .then((grupo) => {
    var partidosGrupo = grupo.partidos;
    partidosGrupo.forEach((partido) => {
      if (partido.equipo1 === req.body.equipo1 && partido.equipo2 === req.body.equipo2) {
        partido.resultadoGoles1 = req.body.golesEquipo1;
        partido.resultadoGoles2 = req.body.golesEquipo2;
        grupo.save();
      }
    });
      var equipos = grupo.equipos;
      equipos.forEach((equipo) => {
        if (equipo.nombre === req.body.equipo1) {

        }
      });
      console.log("hola");
      res.send(partido);
      console.log("antes");
  }).catch((e) => {
    res.status(404).send("La página solicitada no existe.");
  });
}

var cerrarPartidoGrupo = (req, res) => {
  Grupo.findOne({"equipos.nombre": req.body.equipo1})
  .then((grupo) => {
    var partidosGrupo = grupo.partidos;
    partidosGrupo.forEach((partido) => {
      if (partido.equipo1 === req.body.equipo1 && partido.equipo2 === req.body.equipo2) {
        partido.cerrado = true;
        grupo.save();
        res.send(partido);
      }
    });
  }).catch((e) => {
    res.status(404).send("La página solicitada no existe.");
  });
}

module.exports = {
  addPronostico,
  deletePronostico,
  getDescripcionEquipo,
  addPronosticoFaseFinal,
  cargarResultadoGrupo,
  cerrarPartidoGrupo
};
