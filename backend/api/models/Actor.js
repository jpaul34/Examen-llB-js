/**
 * Actor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    apellido: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'string',
      required: true
    },
    numeroPeliculas: {
      type: 'number',
      required: true
    },
    retirado: {
      type: 'boolean',
      required: true
    },
    peliculas: {
      collection: 'pelicula',
      via: 'actorId'
    }
  },

};

