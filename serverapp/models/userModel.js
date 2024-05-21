const { Sequelize, DataTypes } = require('sequelize')

// Initialize Sequelize with your database connection
const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'localhost',
  port: 1433,
  datebase: 'YourUnconditionalSoulDB',
  username: 'sa',
  password: 'IatBditw2024!',
  define: {
    timestamps: false
  }
})

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
})

sequelize.sync().then(() => {
  console.log('User model synchronized with the database')
})

module.exports = User