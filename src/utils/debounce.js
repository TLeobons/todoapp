const debounce = () => {

  const DEBOUNCE_DELAY = 1000

  let typingTimeout = ''

  const debounce = (func, delay = DEBOUNCE_DELAY) => {
    clearTimeout(typingTimeout)
    const timeout = setTimeout(() => func(), delay)
    typingTimeout = timeout
  }

  return debounce
}

export default debounce