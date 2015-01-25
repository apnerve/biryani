var info = require('./food.json');
var biriyani = [];
var filteredInfo = info.filter(function(i) {
  if(typeof i.message == 'string') {
    return i.message.search('biriyani|biryani|Biryani|Biriyani') != -1; // write a proper regex for this
  }
});
filteredInfo.map(function(i) {
  // console.log(i.message); // figure out a way to render it to a template
  biriyani.push({
    message: i.message,
    id: i.id,
    picture: i.picture
  });
});
console.log(biriyani);