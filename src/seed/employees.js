import mongoose from 'mongoose';
// SEED IMPORT BY JAVIER Y MARTIN
// Generate ObjetId on https://observablehq.com/@hugodf/mongodb-objectid-generator
export default [
  {
    _id: mongoose.Types.ObjectId('6288fe568cb389708e53eb0e'),
    firstName: 'Puche',
    lastName: 'Lopez',
    phone: 7761785000,
    email: 'juanssssopez@people.com',
    password: 'password123',
    active: false,
    isDeleted: false,
    isProjectManager: false,
    projects: ['62883891a6c3e40d965f7f8d'],
    timeSheets: ['62883891a6c3e40d965f7f8c'],
    address: 'Rioja 1234',
    picture: 'https://avatars.dicebear.com/api/male/luchito.svg',
    dni: '38978978',
    dateBirth: '2000-04-03',
  },
];
