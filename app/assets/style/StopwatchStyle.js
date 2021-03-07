import { StyleSheet } from 'react-native';
import Utils from '../../utils/utils'
const styles = StyleSheet.create({
  watchContainer: {
    height: Utils.size.height,
    backgroundColor: '#000',
    paddingHorizontal: 12
  },
  watchCount: {
    width: Utils.size.width,
    paddingTop: 150,
    paddingBottom: 100,
    // borderBottomColor: '#fff',
    // borderBottomWidth: 1,
    alignItems: "center",
  },
  totalCount: {
    fontSize: Utils.size.width === 375 ? 110 : 100,
    fontWeight: '200',
    color: '#fff'
  },
  watchOperate: {
    height: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 14
  },
  watchOutsideBtn: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
  },
  watchInsideBtn: {
    width: 93,
    height: 93,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  outsideDisabled: {
    borderColor: '#292929',
    backgroundColor: '#000',
  },
  insideDisabled: {
    backgroundColor: '#292929',
  },
  outsideStart: {
    borderColor: '#172e1c',
    backgroundColor: '#000',
  },
  insideStart: {
    backgroundColor: '#172e1c',
  },
  outsideStop: {
    borderColor: '#3d1512',
    backgroundColor: '#000',
  },
  insideStop: {
    backgroundColor: '#3d1512',
  },
  outsideLap: {
    borderColor: '#3d3d3d',
    backgroundColor: '#000',
  },
  insideLap: {
    backgroundColor: '#3d3d3d',
  },
  watchBtnText: {
    fontSize: 20
  },
  watchBtnTextDisabled: {
    color: '#858488'
  },
  watchBtnTextStart: {
    color: '#4adb68'
  },
  watchBtnTextStop: {
    color: '#ca3136'
  },
  // watchBtnTextLap: {
  //   color: '#3d3d3d'
  // },
  recordList: {
    borderTopColor: '#292929',
    borderTopWidth: 1,
    marginTop: 15,
    marginHorizontal: 20
  },
  latListItem: {
    borderBottomColor: '#292929',
    borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  latItemText: {
    color: '#fff',
    fontSize: 17
  }
})
export default styles;