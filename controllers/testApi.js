module.exports = {
  index: function(req, res) {
    res.status(200).json({
      msg: "Test Api Works"
    });
  }
};
