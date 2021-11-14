export const state = () => ({
   tab: false
})


export const mutations = {
    changeTabState(state){
        state.tab = !state.tab
    }
}

export const actions = {
    changeTab({commit}){
        commit("changeTabState")
    }
}