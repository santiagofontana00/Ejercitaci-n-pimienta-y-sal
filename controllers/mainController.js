const menues =[
  {
  id: 1,
  titulo: "Carpaccio fresco",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite",
  precio: "U$S 65.50"
},
{
  id: 2,
  titulo: "MENU 2",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vit",
  precio: "U$S 65.50"
},
{
  id: 3,
  titulo: "MENU 3",
  
  precio: "U$S 65.50"
}

]


const controller = {
    index: function(req, res, next) {
        res.render('index');
      },

      menu: function(req, res, next) {
        let id = req.params.id
        let menuEcnotrado = menues.find(menu => menu.id == id );
        if(!menuEcnotrado){
          return res.render('error', {mensaje: "No se encontró el menú"});
        }
        if(!menuEcnotrado.descripcion){
          menuEcnotrado.descripcion = "Plato típico";
        }
        res.render('detalleMenu', menuEcnotrado);
      },
    

}

module.exports = controller;

