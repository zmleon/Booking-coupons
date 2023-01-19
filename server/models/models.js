const sequelize = require('../db')
const { DataTypes } = require('sequelize')


const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    last_name: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    login: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    photo:{type:DataTypes.STRING},
    phone_number:{type:DataTypes.STRING,unique:true},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
    date_birth:{type:DataTypes.DATE}
})
const Hospitals = sequelize.define('hospitals', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    phone_number:{type:DataTypes.STRING,unique:true},
    city:{type:DataTypes.STRING},
    adress:{type:DataTypes.STRING},
    photo:{type:DataTypes.STRING}
})
const Doctors = sequelize.define('doctors', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    last_name: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    phone_number:{type:DataTypes.STRING,unique:true},
    position:{type:DataTypes.STRING,unique:true},
    photo:{type:DataTypes.STRING}
})
const Talons = sequelize.define('talons', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date:{type:DataTypes.DATE}
})
const Booked_talons = sequelize.define('booked_talons', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date:{type:DataTypes.DATE}
})
const Feedback=sequelize.define('feedback',
{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING}
}

)

Users.hasMany(Booked_talons)
Booked_talons.belongsTo(Users)
Talons.hasOne(Booked_talons)
Booked_talons.belongsTo(Talons)

Users.hasMany(Feedback)
Feedback.belongsTo(Users)

Hospitals.hasMany(Doctors)
Doctors.belongsTo(Hospitals)


Hospitals.hasMany(Talons)
Talons.belongsTo(Hospitals)
Doctors.hasMany(Talons)
Talons.belongsTo(Doctors)

module.exports={
    Users,
    Hospitals,
    Doctors,
    Talons,
    Booked_talons,
    Feedback
}
