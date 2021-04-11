export default {
  getDataList: (state, action) => {
    return {...state, dateList: action.dateList}
  }
}