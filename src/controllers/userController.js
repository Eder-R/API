const responseModel = {
  success: false,
  data: [],
  errors:[],
}
module.exports = {
  
  async list(req, res) {
    const response = {...responseModel}


    return res.json(response)
  }

}