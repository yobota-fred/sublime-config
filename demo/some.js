/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
var obj = {
  myStr: 'Hello',
  myFunc : function() {
    console.log('hello');
    // eslint-disable-next-line no-undef
    $('.someDiv').animate({height: 500}, function(){
      // trigger the callback
      console.log('Done');
    });
  },
  myFunc2 : function() {
    return 'Just another Level 2 function';
  },
  myNum : function() {
    return 'Level 2 function';
  }
};
