$(document).ready(() => {
  $(document).on('click', '#convert', () => {
    $.ajax({
      url: '/convert',
      type: 'POST',
      data: { formula: $("#formula").val() },
      success: (data) => {
        console.log(data.table)

        if (data.result === "") {
          data.result = "This formula cannot be represented as PCNF, ensure you input at least one atom"
        }
        if (data.table === {} || data.error) {
          data.result = "Invalid formula"
        }

        $("#result").text(data.result)
      },
      error: (data) => {
        $("#result").text('An error occured')
      }
    })
  })
})
