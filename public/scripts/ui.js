$(document).ready(function() {
  $('.submit-btn').on('click',function() {
    $('.results').html('');
    const arr = (g.shortestPath(g.getNode($('.p1').val()), g.getNode($('.p2').val())))
    console.log(arr.length)
    $('.results').append('<h2 style="padding-top:20px;">'+ 'Degrees of Separation' + "</h2>");
    arr.forEach(function(node, index) {
      if (index+1 == arr.length) {
        $('.results').append('<p style="padding-bottom:20px;">'+node.value+'</p>');
      }
      else {
        $('.results').append('<p>'+node.value + '-->'+'</p>');
      }

    })
    g.reset();
  })

  var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

$('.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'playerArray',
  source: substringMatcher(playerArray)
});
})
