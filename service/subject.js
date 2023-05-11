const subjectSchema = require("../models/subject");

exports.subjectCreate = async (req, res) => {
  let { name, email, std } = req.body;

  let subjectData = {
    name: name,

    std: std,
  };
  let data = await subjectSchema(subjectData)
    .save()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((e) => res.send(e));
};

exports.getAllSubject = async (req, res) => {
  await subjectSchema
    .find()
    .then((doc) => {
      res.status(200).send({ subjects: doc });
    })
    .catch((e) => res.send(e));
};

exports.getSubjectById = async (req, res) => {
  await subjectSchema
    .findById(req.params.id)
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((e) => res.send(e));
};

exports.updateSubjectById = async (req, res) => {
  let { name, std } = req.body;
  let subjectData = {
    name: name,
    std: std,
  };
  await subjectSchema
    .findByIdAndUpdate(req.params.id, subjectData)
    .then((doc) => res.staus(200).send("document updated successfully "))
    .catch((e) => res.send(e));
};

exports.deleteSubjectById = async (req, res) => {
  await subjectSchema
    .findByIdAndDelete(req.params.id)
    .then((doc) => res.status(200).send("deleted successuflly"))
    .catch((e) => res.send(e));
};
