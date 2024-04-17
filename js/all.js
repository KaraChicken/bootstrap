// section03
$('.btn').each(function(index, btns) {
  $(btns).on('click', function() {
    let category = $(this).data('category')

    $('.item').addClass('d-none').removeClass('d-block')

    if(category === 'all') {
      $('.item').removeClass('d-none').addClass('d-block')
    } else {
      $('.item-' + category).removeClass('d-none').addClass('d-block')
    }

    $('.btn').removeClass('active');
    $(this).addClass('active');
  })
})

