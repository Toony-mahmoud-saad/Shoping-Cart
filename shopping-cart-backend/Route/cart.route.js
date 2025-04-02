const cartController = require("../Controller/cart.controller")
const Routes = require("express");
const route = Routes();

route.post("/cart",cartController.addCart)
route.get("/cart",cartController.getCart)
route.put("/cart/:id",cartController.updateCart)
route.delete("/cart/:id",cartController.deleteCart)

module.exports = route ;