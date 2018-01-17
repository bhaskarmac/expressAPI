$(document).ready(function () {

  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    var content, block;
    for (var i in blocks) {
      block = blocks[i];
      content = '<a href="#" data-block="'+block+'"><img src="del.png" class="del"></a>'+
      '<a href="/blocks/'+block+'">'+block+'</a>';
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

  $('.block-list').on('click', 'a[data-block]', function (e) {
    if(!confirm("Are you sure to delete this block?")){
      return false;
    }

    var target = $(e.currentTarget);
    $.ajax({
      type: 'DELETE',
      url: '/blocks/' + target.data('block')
    }).done(function () {
      target.parents('li').slideUp('slow').remove();
    });
  });

});
