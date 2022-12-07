const Todo = function (Sequelize, DataTypes) {
  return Sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.text,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "todo",
      freezeTableName: true,
      timestamps: true,
    }
  );
};

module.exports = Todo;
