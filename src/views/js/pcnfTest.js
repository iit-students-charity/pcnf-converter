$(document).ready(() => {
  $(document).on('click', '#pcnf-submit', () => {
    $.ajax({
      url: '/convert',
      type: 'POST',
      data: { formula: $('#formula').text() },
      success: (data) => {
        if (data.result === $('#pcnf').val().replace(/\s/g, '')) {
          $("#result").text('You are right :)')
        } else {
          $("#result").html(`You are wrong :( <br> It should be ${data.result}`)
        }
      }
    })
  })
})
