$(document).ready(function () {

  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    for (var i in blocks) {
      list.push($('<li>', {text: blocks[i]}));
    }
    $('.block-list').append(list);
  }

  $('form').on('submit', function (e) {
    console.log('submit clicked=>');
    e.preventDefault();
    var form = $(this);
    var blockData = form.serialize();
    $.ajax({
      type: 'POST',
      url: '/blocks',
      data: blockData,
    }).done(function (blockName) {
      console.log('blockName=>', blockName);
      appendToList([blockName]);
      form.trigger('reset');
    });
  });

});
