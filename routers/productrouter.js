const {Router} = require ("express");
const productcontroller= require("../controllers/productcontroller")
const router = Router();

router.get("/1", productcontroller.getallproducts);
router.post("/", productcontroller.saveproduct);
router.get("/:id", productcontroller.findproductbyid);
router.delete("/:id", productcontroller.removeproduct);

module.exports = router 