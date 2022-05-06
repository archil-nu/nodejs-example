const { Task } = require('../models');

const query = async (req, res) => {
  const taskList = await Task.findAll(); // ({ where: { taskName: '', taskId: true } });
  res.status(200).send(taskList);
};

const create = async (req, res) => {
  if (!req.authorizedUser) {
      res.status(403).send("Not authorized.");
    return;
  }
  
  try {
    const newTask = req.body;
    const createdTask = await Task.create(newTask);

    res.status(201).send(createdTask);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  create,
  query,
};
