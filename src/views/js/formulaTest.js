$(document).ready(() => {
  $(document).on('click', '#formula-yes', () => {
    convert(true)
  })

  $(document).on('click', '#formula-no', () => {
    convert(false)
  })

  function convert(shouldBeValid) {
    $.ajax({
      url: '/convert',
      type: 'POST',
      data: { formula: $("#formula").text() },
      success: (data) => {
        if (shouldBeValid !== data.error) {
          $("#result").text('You are right :)')
        } else {
          $("#result").text('You are wrong :(')
        }
      }
    })
  }
})

