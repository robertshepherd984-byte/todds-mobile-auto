import './style.css'

const PHONE = '6238891350' // TODO: Todd's real number

document.querySelector('#quote').addEventListener('submit', (e) => {
  e.preventDefault()
  const v = (id) => document.querySelector(id).value.trim()
  const body = `Hi Todd, I'd like a free quote.\nName: ${v('#q-name')}\nPhone: ${v('#q-phone')}\nVehicle: ${v('#q-car')}\nNeed: ${v('#q-need')}`
  window.location.href = `sms:${PHONE}?&body=${encodeURIComponent(body)}`
})
