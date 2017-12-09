'use strict';
const router = require('express').Router();
const Student = require('../db/models/student');

module.exports = router;

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.send(student))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.send(student))
    .catch(next);
});

router.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body, {
      returning: true
    }))
    .then(student => res.send(student))
    .catch(next);
});

router.delete('/:studentId', (req, res, next) => {
  const id = req.params.studentId;
  console.log('id', id);

  Student.destroy({where: { id } })
  .then(() => res.status(204).send())
  .catch(next);
});
