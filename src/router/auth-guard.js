import {store} from '../store'

export default (to, from, next) => {
  if (store.getters.user) {
    next()
  } else {
    alert('you have to sign in')
    next('/')
  }
}
