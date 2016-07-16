var TelegramBot = require('node-telegram-bot-api');

var token = '234324399:AAFrM5QwF_j4_qq1QWYrTf_H9HZ_0j9EYjs';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});

function onAlert(msg, match){
  // const message = '<a href="http://isuvorov.ru">Не нажимать</a>'
  console.log('alert')
  const message = 'ПОЛУДРА!!! @isuvorov @volkovpishet @natavts @anorudes @immuzov @antouhou @yukioru_k @durob @AtNovember @THEHVZE @flood7 @romankalinkin @UpworkChatBot @Axenia_Bot @imandabot @BratishkaBot'
  bot.sendMessage(msg.chat.id, message).catch(console.error);
  bot.sendMessage(msg.chat.id, 'Нас АТАКУЮТ!').catch(console.error);

  // console.log('alert', msg)
  // bot._request('getChat', {form: {chat_id: msg.chat.id}}).then(data => {
  //   console.log(data)
  // }).catch(console.error)
  // bot._request('getChatMembersCount', {form: {chat_id: msg.chat.id}}).then(data => {
  //   console.log(data)
  // }).catch(console.error)
  // bot._request('getChatMembers', {form: {chat_id: msg.chat.id, user_id: 1227280}}).then(data => {
  //   console.log(data)
  // }).catch(console.error)
  // var fromId = msg.from.id;
  // var resp = match[1];
  // bot.sendMessage(msg.chat.id, message, {parse_mode	: 'HTML'});
}

bot.onText(/\/polundra/, onAlert);
bot.onText(/\/alert/, onAlert);
bot.onText(/\/alarm/, onAlert);
bot.onText(/\/danger/, onAlert);
bot.onText(/\/warning/, onAlert);

// Any kind of message
// bot.on('message', function (msg) {
//   var chatId = msg.chat.id;
//   // photo can be: a file path, a stream or a Telegram file_id
//   var photo = 'cats.png';
//   bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
// });
