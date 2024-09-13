(function () {
    // INITIALIZATION OF COUNTDOWN
    // =======================================================
    const oneYearFromNow = new Date('2024-09-12 22:00:00')

    document.querySelectorAll('.js-countdown').forEach(item => {
      const days = item.querySelector('.js-cd-days'),
        hours = item.querySelector('.js-cd-hours'),
        minutes = item.querySelector('.js-cd-minutes'),
        seconds = item.querySelector('.js-cd-seconds')

      countdown(oneYearFromNow.setFullYear(
        oneYearFromNow.getFullYear()),
        ts => {
          days.innerHTML = ts.days
          hours.innerHTML = ts.hours
          minutes.innerHTML = ts.minutes
          seconds.innerHTML = ts.seconds
        },
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
      )
    })
  })()