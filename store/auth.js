const defaultState = () => {
    return {
        user: {
            uid:"",
            email:"",
            displayName:"",
            imgUrl: "",
            idToken:"",
        },
        isLoggedIn: false
    }
};

export const state = () => defaultState()

export const getters = {
  isAuthenticated(state){
    return state.isLoggedIn
  }
}

export const mutations = {
    resetStore: (state) => {
      Object.assign(state, defaultState());
    },
    setAuthUser: (state, { authUser, claims }) => {
      state.user.uid = authUser.uid,
      state.user.email = authUser.email,
      state.user.displayName = authUser.displayName ? authUser.displayName : (state.user.displayName? state.user.displayName:""),
      state.user.imgUrl = authUser.photoURL ? authUser.photoURL : "",
      state.isLoggedIn = true
    },
    setEmail: (state, email) => {
      state.user.email = email
    },
    setDisplayName: (state, name) => {
      state.user.displayName = name
    },
    setIdToken: (state, idToken) => {
      state.user.idToken = idToken
    },
    setUID: (state, uid)=>{
      state.user.uid = uid
    }
}

export const actions = {
  async nuxtServerInit({ dispatch }, ctx) {
  
      // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
  
      /** Get the VERIFIED authUser from the server */
      if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
        const { allClaims: claims, ...authUser } = ctx.res.locals.user

        await dispatch('auth/onAuthStateChangedAction', {
          authUser,
          claims
        })
  
      }
    },
    async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
        if (!authUser) {
            commit('resetStore')
            this.$router.push("/")
            return
        }
        await commit('setAuthUser', { authUser, claims });
        await this.$fire.auth.currentUser.getIdToken(true).then(res=>{
            commit("setIdToken", res)  
        });
        this.$router.push("/product")
    },
    async firebaseLogin({commit}, credential){
        await this.$fire.auth.signInWithEmailAndPassword(
            credential.email,
            credential.password
        )
    },
    firebaseLogout(){
        this.$fire.auth.signOut();
    },

    async getIdToken({commit }){
        await this.$fire.auth.currentUser.getIdToken(true).then(res=>{
            commit("setIdToken", res)  
        });
    }
}