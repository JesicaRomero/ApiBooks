const { bookService } = require('../services')

async function find(req, res, next) {
  const { id, userId } = req.query
  try {
    const books = id
      ? await bookService.findOne(id, userId)
      : await bookService.findMany(userId)
    res.json({ books })
  } catch (error) {
    next(error)
  }
}

async function create(req, res, next) {
  const data = req.body
  try {
    await bookService.create(data)
    res.json({ ok: true, message: 'Libro creado correctamente' })
  } catch (error) {
    next(error)
  }
}

async function deleteOne(req, res, next) {
  const { id } = req.query
  try {
    const result = await bookService.deleteOne(id)
    if (result.affectedRows === 0) {
      res.json({ ok: false, message: 'No se pudo eliminar el libro' })
    }
    res.json({ ok: true, message: 'Libro eliminado correctamente' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  find,
  create,
  deleteOne,
}
