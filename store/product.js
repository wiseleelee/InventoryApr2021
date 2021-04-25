
const defaultState = () => {
    return {
        productName: "",
        price: "",
        category: "",
        supplierName: "",
        quantity: "",
        imgSrc: "",
        products: []
    }
};

export const state = () => defaultState();

export const mutations = {
    resetStore: (state) => {
        Object.assign(state, defaultState());
    },
    setProductName: (state, productName) => {
        state.productName = productName
    },
    setPrice: (state, price) => {
        state.price = price
    },
    setCategory: (state, category) => {
        state.category = category
    },
    setSupplierName: (state, supplierName) => {
        state.supplierName = supplierName
    },
    setQuantity: (state, quantity) => {
        state.quantity = quantity
    },
    setImgSrc: (state, imgSrc) => {
        state.imgSrc = imgSrc
    },
    setProducts: (state, products) =>{
        state.products = products
    }
}

export const actions = {
    async getProducts ({ commit }, credential) {
        this.$axios.setHeader('uid', credential.uid);
        this.$axios.setHeader('idtoken', credential.token);
        const products = await this.$axios.$get('/products')
        commit('setProducts', products["products"])
      },
    async createProduct ({commit, state}, credential){
        const headers = {
            headers: {
                uid: credential.uid,
                idtoken: credential.token
            }
        };
        const status = await this.$axios.$post('/products/new', state, headers);
        commit('resetStore');
        this.$router.push("/product");
    }
}