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
    año: {
      type: 'number',
      required: true
    },
    actorId: {
      model: 'actor'
    }
  },

};

