const { userService } = require('../services')

async function register(req, res, next) {
  const data = req.body
  try {
    await userService.register(data)
    res.json({ ok: true, message: 'Registrado correctamente' })
  } catch (error) {
    next(error)
  }
}

async function login(req, res, next) {
  const data = req.body
  try {
    const user = await userService.login(data)
    if (user.length < 1) {
      res.status(401).json({ ok: false, message: 'Email no registrado' })
    }
    res.json({ user: user[0] })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  register,
  login,
}
