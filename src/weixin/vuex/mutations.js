// import { CHANGE_SHOWFOOTER } from "./mutation-types"
export const mutations = {
	// 设置是否登录
  SET_ISLOGIN (state, flag) {
    state.isLogin = flag;
  },
  // 设置是否在加载
  SET_ISLOADING (state, flag) {
    state.isLoading = flag;
  },
	// 设置是否在加载
  SET_SEARCHWORD (state, word) {
    state.searchWord = word;
  },
  SET_SCODE (state, sCode) {
    state.sCode = sCode;
  },
  SET_DEPARTMENTID (state, departmentId) {
    state.departmentId = departmentId;
  },
  SET_MAJORID (state, majorId) {
    state.majorId = majorId;
  },
}
