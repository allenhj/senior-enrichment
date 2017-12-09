'use strict';

const Student = require('./student');
const Campus = require('./campus');

Campus.hasMany(Student, { onDelete: 'cascade' });
Student.belongsTo(Campus);

module.exports = {
	Student,
	Campus
};

