var TelegramBot = require('node-telegram-bot-api');
var token = '151719565:AAFYYTfJmzx-FjpmBo8p8dcaT3qwsOdtdyk';

var bot = new TelegramBot(
    token, {
        polling: true
});

bot.getMe().then(function(me){
    console.log('Hi my name is ' + me.username);
});

bot.onText(/\/calificacion (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  Alumnos.find({matricula:resp}).exec(function (err, alumno){
    if (err) {
      console.log(err);
    }
    var mat = ""
    var cal = ""
    for (var i = 0; i < alumno.length; i++) {
      mat = alumno[i].materia
      cal = alumno[i].calificacion
    }
    var msg = "La materia asignada es: " + mat + ". Con calificación: " + cal
    console.log(msg);
    bot.sendMessage(fromId, msg);
  });

});
