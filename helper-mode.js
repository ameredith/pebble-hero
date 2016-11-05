/** * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');

var alert = [
  {
    title: 'Who needs help?'
  }
];

var Menu1 = new UI.Menu({
  backgroundColor: 'red',
  sections: [{
  title: 'Somebody Needs Help',
  items: alert
}]
});
// Create the second menu
var Menu2 = new UI.Menu({
  backgroundColor: 'orange',
  sections: [{
    title: 'Who Needs Help?',
    items: [{
      title:'Name:',
      subtitle: 'John Doe'
  },{
    title: 'Location:',
    subtitle: '1 Chapin Way',
  }]
}]
});
Menu1.show();
Menu1.on('select', function(event){
  Menu2.show();
  Menu2.on('select', function(event){
    var detailCard = new UI.Card({
      title: "Your Buddy Know's You're Coming"
    });
    detailCard.show();
  });
  });
