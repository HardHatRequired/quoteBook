angular.module('quoteApp16-06-02').factory('dataService', function() {
  var service = {};

  service.addData = function(obj, arr) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].text === obj.text) {
        return "Quote already exists";
      }
    }
    if(obj.hasOwnProperty() && obj.text && obj.author) {
      arr.push(obj);
      return true;
    }
    return false;
  };

  service.removeData = function(str, arr) {
    for(var i = 0; i<arr.length; i++) {
      if(arr[i].text.toLowerCase() === str.toLowerCase()) {
        arr.splice(i,1);
        i--;
      }
    }
  };

  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

    service.getData = function() {
      return quotes;
    }

  service.expObj = function(newQuote, newAuthor) {
    var newObj = {};
    newObj.text = newQuote;
    newObj.author = (newAuthor) ? newAuthor: 'Anonymous';
    quotes.unshift(newObj);
    console.debug(quotes);
  }

  return service;

//Could have done it like this without the function above
  // this.quotes = [
  //   { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
  //   { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
  //   { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
  //   { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
  //   { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
  //   { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
  //   { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  // ];

});
