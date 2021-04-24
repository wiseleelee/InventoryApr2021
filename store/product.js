
const defaultState = () => {
    return {
        productName: "",
        price: "",
        category: "",
        supplierName: "",
        quantity: "",
        imgSrc: ""
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
    setProduct: (state, product) =>{
        state.productName = product.name
    }
}

export const actions = {
    async getProduct ({ commit }) {
        const product = await this.$axios.$get('/products')
        commit('setProduct', product)
      },
    async createProduct ({state}){
        const status = await this.$axios.$post('/products/new', state)
        console.log(status)
    }
}