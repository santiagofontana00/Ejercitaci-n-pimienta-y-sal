const controller = {
    index: function(req, res, next) {
        res.render('index');
      },

      menu: function(req, res, next) {
        res.render('detalleMenu');
      },
    

}

module.exports = controller;

