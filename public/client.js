$(document).ready(function () {

  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    var content, block;
    for (var i in blocks) {
      block = blocks[i];
      content = '<a href="/blocks/'+block+'">'+block+'</a>';
      list.push($('<li>', {html: content}));
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
