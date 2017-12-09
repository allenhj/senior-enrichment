'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  className: {
    type: Sequelize.STRING,
    defaultValue: 'moon'
  },
  description: Sequelize.TEXT
});
