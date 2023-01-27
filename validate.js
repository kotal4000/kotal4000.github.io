const email = document.getElementById('email')
const title = document.getElementById('title')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (title.value === '' || title.value == null) {
    messages.push('Title is required')
  }

  if (message.value === '' || message.value == null) {
    messages.push('Message is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})