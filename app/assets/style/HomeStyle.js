import { StyleSheet } from 'react-native';
import Utils from '../../utils/utils'
const styles = StyleSheet.create({
  main: {
    width: Utils.size.width,
    height: Utils.size.height
  },
  wrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonList: {
    flexDirection: "row",
    flexWrap:"wrap",
  },
  touchButton: {
    width: Utils.size.width/3 - 0.33334,
    height: Utils.size.width/3,
    borderRightColor:"#fff",
    borderBottomWidth: Utils.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Utils.pixel,
    borderRightColor:"#ccc",
    alignItems:"center",
    justifyContent:"center",
  }
});

export default styles;
