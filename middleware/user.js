export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    switch (store.state.auth.user.roles) {
      case 'admin':
        return redirect('/admin')
      default:
        break
    }
  } else {
    return redirect('/login')
  }
}
