'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT
  },
  name: {
    type: Sequelize.VIRTUAL,
    get: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

