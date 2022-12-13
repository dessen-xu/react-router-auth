const fakeAuthProvider = {
    isAuthenticate: false,

    singIn(callback) {
        fakeAuthProvider.isAuthenticate = true
        setTimeout(callback, 1000)
    },

    singOut(callback) {
        fakeAuthProvider.isAuthenticate = false
        setTimeout(callback, 1000)
    }
}

export default fakeAuthProvider