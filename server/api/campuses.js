'use strict';
const router = require('express').Router();
const Campus = require('../db/models/campus');

module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then((campuses) => {
    res.send(campuses);
  })
  .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.send(campus))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next);
});

router.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body, {
      returning: true
    }))
    .then(campus => res.send(campus))
    .catch(next);
});

router.delete('/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.destroy({where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
