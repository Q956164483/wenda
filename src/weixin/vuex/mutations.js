// import { CHANGE_SHOWFOOTER } from "./mutation-types"
export const mutations = {
	// 设置是否登录
  SET_ISLOGIN (state, flag) {
    state.isLogin = flag;
  },
  // 设置用户ID
  SET_USERID (state, flag) {
    state.userId = flag;
  },
  // 设置是否在加载
  SET_ISLOADING (state, flag) {
    state.isLoading = flag;
  },
	// 设置是否在加载
  SET_SEARCHWORD (state, word) {
    state.searchWord = word;
  },
  // 设置学校code
  SET_SCODE (state, sCode) {
    state.sCode = sCode;
  },
  // 设置院系ID
  SET_DEPARTMENTID (state, departmentId) {
    state.departmentId = departmentId;
  },
  // 设置专业ID
  SET_MAJORID (state, majorId) {
    state.majorId = majorId;
  },
}
