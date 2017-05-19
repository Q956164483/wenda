// import { CHANGE_SHOWFOOTER} from "./mutation-types"
export const actions = {
	CHANGE_SHOWFOOTER({commit},flag){
		commit('CHANGE_SHOWFOOTER',flag)
	},
	CHANGE_FOOTERTAB({commit},idx){
		commit('CHANGE_FOOTERTAB',idx)
	},
	CHANGE_SECONDNAVDATA({commit},list){
		commit('CHANGE_SECONDNAVDATA',list)
	},
	CHANGE_SUBNAVDATA({commit},list){
		commit('CHANGE_SUBNAVDATA',list)
	},
	CHANGE_SUBCONDATA({commit},list){
		commit('CHANGE_SUBCONDATA',list)
	},
	CHANGE_SCHLISTTAB({commit},list){
		commit('CHANGE_SCHLISTTAB',list)
	}
}