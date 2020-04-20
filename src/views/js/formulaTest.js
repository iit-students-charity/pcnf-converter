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
        isValid = true
        if (data.error) {
          isValid = false
        }

        if (shouldBeValid === isValid) {
          $("#result").text('You are right :)')
        } else {
          $("#result").text('You are wrong :(')
        }
      },
      error: (data) => {
        if (shouldBeValid) {
          $("#result").text('You are wrong :(')
        } else {
          $("#result").text('You are right :)')
        }
      }
    })
  }
})

