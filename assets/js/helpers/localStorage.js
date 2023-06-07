function has (key) {
    return window.localStorage.getItem(key)
  }
  
  function get (key) {
    return JSON.parse(window.localStorage.getItem(key))
  }
  
  function set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  
  function remove (key) {
    window.localStorage.removeItem(key)
  }
  
  const ls = {
    has,
    get,
    set,
    remove
  }
  
  export default ls