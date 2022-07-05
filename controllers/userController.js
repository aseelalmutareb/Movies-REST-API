const User = require('../models/User');

const addUser = async (req, res) => {
  const { name, age, email } = req.body;

  const newUser = {
    name,
    age,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try{
    const savedUser = await User.create(newUser);
    res.json(savedUser);
  }catch(e){
    res.json(e.message)
  }
};

module.exports = {
  addUser,
};
