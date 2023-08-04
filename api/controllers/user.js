const User = require("../models/User.js");

exports.updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}


exports.deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}


exports.getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}


exports.getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}


// Obtener información del usuario actualmente autenticado
exports.getAuthenticatedUser = async (req, res) => {
  try {
    const userId = req.userId; // Asumiendo que tienes un middleware que agrega el ID del usuario al objeto de solicitud (req.userId) después de verificar el token.
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Devolver solo la información necesaria, como el nombre de usuario
    res.json({ username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error en el servidor." });
  }
};

// Obtener información de un usuario específico por su ID
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Devolver solo la información necesaria, como el nombre de usuario
    res.json({ username: user.username });
  } catch (err) {
    next(err);
  }
};

// ... otras funciones de controlador ...
