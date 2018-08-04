export default class AuthController {
  constructor(router) {
    router.get('/favorites', this.getFavorites)
  }

  async getFavorites(req, res) {
    const { amount } = req.body
    const animals = ["dogs", "cats", "chickens", "snakes"]
    res.send({ animals: animals.slice(0, amount)})
  }
}
