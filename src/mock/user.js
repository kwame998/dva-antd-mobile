module.exports = {
  [`GET /api/class`](req, res) {
    const {id} = req.params
    const data = {'name': 'kwame'}
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json({'aa': 'aa'})
    }
  },
}
