const request = require('supertest');
const app = require('../api_rest/api.js');
const Asercion = require('../src/asserts.js');

var aserciones = new Asercion();

var api = app.listen(8080);

//HU01
describe('GET /equipos/barcelona', function() {
    it('Test de una petición GET correcta', function() {
      return request(api)
        .get('/equipos/barcelona')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(response => {
            aserciones.expect(response.text).toInclude('FC Barcelona');
            aserciones.expect(response.text).toNotInclude('Real Madrid');
        })
    });

    it('Test de una petición GET incorrecta', function() {
        return request(api)
          .get('/equipos/noexiste')
          .expect(404)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then(response => {
              aserciones.expect(response.text).toInclude('No se ha encontrado');
          })
    });
});

//HU02
describe('GET /jugadores/hazard', function() {
    it('Test de una petición GET correcta', function() {
      return request(api)
        .get('/jugadores/hazard')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(response => {
            aserciones.expect(response.text).toInclude('Hazard');
            aserciones.expect(response.text).toNotInclude('Pedri');
        })
    });

    it('Test de una petición GET incorrecta', function() {
        return request(api)
          .get('/jugadores/noexiste')
          .expect(404)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then(response => {
              aserciones.expect(response.text).toInclude('No se ha encontrado');
          })
    });
});

//HU04
describe('GET /ranking', function() {
    it('Test de una petición GET correcta', function() {
      return request(api)
        .get('/ranking')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(response => {
            aserciones.expect(response.text).toInclude('Barcelona');
            aserciones.expect(response.text).toNotInclude('Koke');
            aserciones.expect(response.text).toInclude('Betis');
        })
    });
});

//HU05
describe('PUT /jugadores/traspaso', function() {
    it('Test de una petición PUT correcta', function() {
    var datos = {
        "nombre_jugador":"Messi",
        "nombre_equipo":"Eibar"
    };
      return request(api)
        .put('/jugadores/traspaso')
        .send(datos)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(response => {
            aserciones.expect(response.text).toInclude('Eibar');
            aserciones.expect(response.text).toNotInclude('Barcelona');
            aserciones.expect(response.text).toInclude('Messi');
        })
    });

    it('Test de una petición PUT incorrecta', function() {
        var datos = {
            "nombre_equipo":"Eibar"
        };
          return request(api)
            .put('/jugadores/traspaso')
            .send(datos)
            .expect(400)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then(response => {
                aserciones.expect(response.text).toInclude('No se han indicado los parámetros');
                aserciones.expect(response.text).toNotInclude('Eibar');
            })
    });

    it('Test de una petición PUT incorrecta', function() {
        var datos = {
            "nombre_jugador":"NoExiste",
            "nombre_equipo":"Eibar"
        };
          return request(api)
            .put('/jugadores/traspaso')
            .send(datos)
            .expect(404)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then(response => {
                aserciones.expect(response.text).toInclude('No se ha encontrado al jugador');
                aserciones.expect(response.text).toNotInclude('Eibar');
            })
    });

    it('Test de una petición PUT incorrecta', function() {
        var datos = {
            "nombre_jugador":"Messi",
            "nombre_equipo":"Madrid"
        };
          return request(api)
            .put('/jugadores/traspaso')
            .send(datos)
            .expect(400)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then(response => {
                aserciones.expect(response.text).toInclude('Se ha encontrado más de un equipo');
                aserciones.expect(response.text).toNotInclude('Eibar');
            })
    });
});

//HU06
describe('POST /partidos/nuevo', function() {
    it('Test de una petición POST correcta', function() {
    var datos = {
        "equipoLocal":"Levante",
        "equipoVisitante":"Huesca",
        "fecha_anio":2020,
        "fecha_mes":8,
        "fecha_dia":26,
        "fecha_hora":22,
        "fecha_minutos":30
    };
      return request(api)
        .post('/partidos/nuevo')
        .send(datos)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(response => {
            aserciones.expect(response.text).toInclude('Levante');
            aserciones.expect(response.text).toInclude('Huesca');
            aserciones.expect(response.text).toNotInclude('Barcelona');
            aserciones.expect(response.text).toInclude('Sin definir');
        })
    });

    it('Test de una petición POST incorrecta', function() {
        var datos = {
            "equipoLocal":"Levante",
            "equipoVisitante":"Huesca",
            "fecha_mes":8,
            "fecha_dia":26,
            "fecha_hora":22,
            "fecha_minutos":30
        };
          return request(api)
            .post('/partidos/nuevo')
            .send(datos)
            .expect(400)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then(response => {
                aserciones.expect(response.text).toNotInclude('Levante');
                aserciones.expect(response.text).toNotInclude('Huesca');
                aserciones.expect(response.text).toNotInclude('Barcelona');
                aserciones.expect(response.text).toInclude('Argumentos no válidos.');
            })
    });

    it('Test de una petición POST correcta', function() {
        var datos = {
            "equipoLocal":"NoExiste",
            "equipoVisitante":"Huesca",
            "fecha_anio":2020,
            "fecha_mes":8,
            "fecha_dia":26,
            "fecha_hora":22,
            "fecha_minutos":30
        };
            return request(api)
            .post('/partidos/nuevo')
            .send(datos)
            .expect(404)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .then(response => {
                aserciones.expect(response.text).toNotInclude('Sevilla');
                aserciones.expect(response.text).toNotInclude('Huesca');
                aserciones.expect(response.text).toNotInclude('Real Madrid');
                aserciones.expect(response.text).toInclude('No se han encontrado los equipos');
            })
    });

});

//HU03
describe('GET /partidos/:nombre_equipo', function() {
    it('Test de una petición GET correcta', function() {
      return request(api)
        .get('/partidos/levante')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(response => {
            aserciones.expect(response.text).toInclude('Levante');
            aserciones.expect(response.text).toInclude('Huesca');
            aserciones.expect(response.text).toNotInclude('Valencia');
            aserciones.expect(response.text).toInclude('Sin definir');
        })
    });

    it('Test de una petición GET incorrecta', function() {
        return request(api)
          .get('/partidos/villareal')
          .expect(404)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then(response => {
              aserciones.expect(response.text).toNotInclude('Villareal');
              aserciones.expect(response.text).toNotInclude('Valencia');
              aserciones.expect(response.text).toInclude('No se ha encontrado ningún partido del equipo dado');
          })
    });

});

api.close();