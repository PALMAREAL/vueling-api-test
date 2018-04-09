module.exports = (app) => {
  let server = app.listen(3000,"0.0.0.0",() => {
     let host = server.address().address;
     let port = server.address().port;
     console.log("Servidor escuchando en http://%s:%s", host, port);
   });
}
