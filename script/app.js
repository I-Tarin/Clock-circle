setInterval(() => {
  let hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    ampm = document.getElementById('ampm')

  let hh = document.getElementById('hh'),
    mm = document.getElementById('mm'),
    ss = document.getElementById('ss')

  let hr_dot = document.querySelector(`.hr_dot`),
    min_dot = document.querySelector(`.min_dot`),
    sec_dot = document.querySelector(`.sec_dot`)

  let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds()

  // АМ РМ
  let am = h >= 12 ? "PM" : "AM"
  if (h > 12) {
    h = h - 12;
  }

  // Добавряем 0 к одиночкам
  h = (h < 10) ? "0" + h : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s

  hours.textContent = h
  minutes.textContent = m
  seconds.textContent = s
  ampm.innerHTML = am

  // падежи
  const numWord = (value, world) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10

    if (value > 10 & value < 20) return world[2]
    if (lastNum > 1 && lastNum < 5) return world[1]
    if (lastNum === 1) return world[0]

    return world[2]
  }

  hours.nextElementSibling.textContent = numWord(h, ['час', 'часа', 'часов'])
  minutes.nextElementSibling.textContent = numWord(m, ['минута', 'минуты', 'минут'])
  seconds.nextElementSibling.textContent = numWord(s, ['секунда', 'секунды', 'секунд'])


  // 12 часов аналог
  hh.style.strokeDashoffset = 440 - (440 * h) / 12
  // 60 минут
  mm.style.strokeDashoffset = 440 - (440 * m) / 60
  // 60 секунд
  ss.style.strokeDashoffset = 440 - (440 * s) / 60

  // точка
  hr_dot.style.transform = `rotate(${h * 30}deg)`
  // 360 / 12 = 30
  min_dot.style.transform = `rotate(${m * 6}deg)`
  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`
  // 360 / 30 = 6
}, 500)