/** * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');
var Vector2 = require('vector2');
var victim = [
  {
    title: 'I need help!',
    subtitle: 'I am being harrassed'
  }
];
var bystander = [
  {
    title: 'I saw harrassment!',
    subtitle: 'I just witnessed harrasment'
  }
];
var Hero = [
  {
    title: "Your Hero Has Been Contacted",
    subtitle: "They Will Contact You Shortly"
  }
];
var Menu1 = new UI.Menu({
  backgroundColor: 'red',
  sections: [{
  title: 'Pebble Hero',
  items: victim
},{
  items: bystander
}]
});
// Create the second menu
var Menu2 = new UI.Menu({
  backgroundColor: 'orange',
  sections: [{
    title: 'Who to contact?',
    items: [{
    title:'Level One',
    subtitle: 'Contact Police!'
  },{
    title: 'Level Two',
    subtitle: 'Contact Counselor',
  },{
    title:'Level Three',
     subtitle:'Contact Buddy'
  }]
}]
});
Menu1.show();
Menu1.on('select', function(event){
  Menu2.show();
  Menu2.on('select', function(event){
    var detailCard = new UI.Card({
      title: "Your Hero Has Been Contacted",
      subtitle: "They'll Be Here Soon"
    });
    detailCard.show();
  });
  });
