export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    switch (store.state.auth.user.roles === 'admin') {
      case 'user':
        return redirect('/dashboard')
      default:
        break
    }
  } else {
    return redirect('/login')
  }
}
