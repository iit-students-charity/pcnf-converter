$(document).ready(() => {
  $(document).on('click', '#convert', () => {
    $.ajax({
      url: '/convert',
      type: 'POST',
      data: { formula: $("#formula").val() },
      success: (data) => {
        console.log(data.table)
        $("#result").text(data.result)
      },
      error: (data) => {
        $("#result").text('An error occured')
      }
    })
  })
})
