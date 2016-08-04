module.exports = {
  testApi: function(req, res) {
    res.status(200).json({
      msg: "Test Api Works"
    });
  }
};
