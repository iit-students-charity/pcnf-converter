$(document).ready(() => {
  $(document).on('click', '#submit', (e) => {
    e.preventDefault()
    $.ajax({
      url: '/convert',
      type: 'POST',
      data: { formula: $("#formula").val() },
      success: (data) => {
        console.log(data.table)
        $("#result").text(data.result)
      }
    })
  })
})
