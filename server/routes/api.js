var express = require('express')
var router = express.Router()

/* GET users listing. */
router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  if (username === 'admin' && password === '123456') {
    res.send({
      code: 200,
      data: '',
      message: '登入成功!'
    })
  } else {
    res.send({
      code: 401,
      data: '',
      message: '登入失敗!'
    })
  }
})

module.exports = router
