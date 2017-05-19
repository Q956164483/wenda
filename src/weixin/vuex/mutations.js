// import { CHANGE_SHOWFOOTER } from "./mutation-types"
export const mutations = {
    CHANGE_SHOWFOOTER(state, flag) {
        state.isShowFooter = flag
    },
    CHANGE_FOOTERTAB(state, idx) {
        state.footer_tab = idx
    },
    CHANGE_SECONDNAVDATA(state,list){
		state.secondNavData = list
	},
	CHANGE_SUBNAVDATA(state,list){
		state.subNavData = list
	},
	CHANGE_SUBCONDATA(state,list){
		state.subConData = list
	},
	CHANGE_SCODE(state,scode){
		state.scode = scode
	},
	CHANGE_CONTENTTYPE(state,idx){
		state.contentType = idx
	},
	CHANGE_INFOID(state,idx){
		state.infoId = idx
	},
	CHANGE_CATID(state,idx){
		state.catId = idx
	},
	CHANGE_ISLOGIN(state,flag){
		state.isLogin = flag
	},
	CHANGE_MSGCOUNT(state,messageCount){
		state.messageCount = messageCount
	},
	CHANGE_SCHOLL(state,scholl){
		state.scholl = scholl
	},
	CHANGE_FOOTERMENU(state,footerMenu){
		state.footerMenu = footerMenu
	},
	CHANGE_THEMECOLOR(state,color){
		state.themeColor = color
	},
	CHANGE_LOADINGFLAG(state,f){
		state.loadingFlag = f
	},
	CHANGE_IDENTIFY(state,identify){
		state.identify = identify
	},
	CHANGE_SID(state,id){
		state.sid = id
	},
	CHANGE_SCHLISTTAB(state,idx){
		state.schListTab = idx
	},
	CHANGE_SDECODE(state,sdecode){
		state.sdecode = sdecode
	},
	CHANGE_SDECODE2(state,sdecode){
		state.sdecode2 = sdecode
	},
}
