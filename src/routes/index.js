const {
  connect,
  get_enviarmensaje,
  post_enviarmensaje,
} = require("../app/index");
const { Router } = require("express");
const router = Router();


connect();
router.get("/enviarmensaje", get_enviarmensaje);


router.post("/enviarmensaje", post_enviarmensaje);

module.exports = router;
