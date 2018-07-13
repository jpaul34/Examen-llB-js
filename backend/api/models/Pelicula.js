/**
 * Pelicula.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    peliculaId: {
      type: 'number',
      required: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    anioLanzamiento: {
      type: 'number',
      required: true
    },
    rating: {
      type: 'number',
      required: true
    },
    genero: {
      type: 'string',
      required: true
    },
    duracion: {
      type: 'string',
      required: true
    },
    idioma: {
      type: 'string',
      required: true
    },
    costo: {
      type: 'string',
      required: true
    },
    actorId: {
      model: 'actor'
    }
  },

};

