export default function ({ store, route, redirect }) {
    //If the user is not authenticated
    if (!store.state.auth.isLoggedIn) {
        return redirect('/')
    }
}