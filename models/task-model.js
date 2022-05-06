module.exports = (sequelize, { DataTypes }) => {
  let Task = sequelize.define("Task", {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    taskName: DataTypes.STRING,
    content: DataTypes.STRING
  });

  Task.sync();

  return Task;
};