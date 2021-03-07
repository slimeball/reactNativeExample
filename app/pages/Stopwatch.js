import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import styles from '../assets/style/StopwatchStyle';
class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      resetCount: '00:00.00',
      totalCount: '00:00.00',
      firstStart: false,
      isStart: false,
      latList: [],
      lapBtnText: 'Lap',
      timeInterval: null,
    }
  }
  setTime(){
    let timestamp = new Date().getTime();
     let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
    if(this.state.isStart) {
      this.setState({
        timeInterval: setInterval(()=>{
          let timestampnow = new Date().getTime();
          countingTime = timestampnow - timestamp;
          minute = Math.floor(countingTime/(60*1000));
          second = Math.floor((countingTime-6000*minute)/1000);
          milSecond = Math.floor((countingTime%1000)/10);
          seccountingTime = countingTime;
          secminute = Math.floor(seccountingTime/(60*1000));
          secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
          secmilSecond = Math.floor((seccountingTime%1000)/10);
          this.setState({
            totalCount: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
          })
        }, 10)
      })
    }
  }
  startFunc() {
    if (this.state.isStart) {
      this.setState({
        isStart: false
      })
      clearInterval(this.state.timeInterval)
    } else {
      this.setState({
        isStart: true
      }, ()=>{

      this.setTime();
      })
      if (!this.state.firstStart) {
        this.setState({
          firstStart: true
        })
      }
    }

    this.LapButtonText();
  }
  lapFunc() {
    if (this.state.isStart) {
      let arr = [...this.state.latList];
      arr.push(this.state.totalCount)
      this.setState({
        latList: arr
      })
    } else {
      this.setState({
        latList: [],
        firstStart: false
      }, ()=>{
        this.LapButtonText();
        clearInterval(this.state.timeInterval)
        this.setState({
          timeInterval: null,
          totalCount: this.state.resetCount
        })
      })
    }
  }
  LapButtonText() {
    if (this.state.firstStart) {
      this.setState({
        lapBtnText: 'Reset'
      })
    } else {
      this.setState({
        lapBtnText: 'Lap'
      })
    }
  }

  render() {
    return (
      <View style={styles.watchContainer}>
        <View style={styles.watchCount}>
          <Text style={styles.totalCount}>{this.state.totalCount}</Text>
        </View>
        <View style={styles.watchOperate}>
          <TouchableHighlight style={[styles.watchOutsideBtn, styles.outsideDisabled]} onPress={() => this.lapFunc()}>
            <View style={[styles.watchInsideBtn, styles.insideDisabled]}>
              <Text style={[styles.watchBtnText, styles.watchBtnTextDisabled]}>{this.state.lapBtnText}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.watchOutsideBtn, this.state.isStart ? styles.outsideStop : styles.outsideStart]} onPress={() => this.startFunc()}>
            <View style={[styles.watchInsideBtn, this.state.isStart ? styles.insideStop : styles.insideStart]}>
              <Text style={[styles.watchBtnText, this.state.isStart ? styles.watchBtnTextStop : styles.watchBtnTextStart]}>{this.state.isStart ? 'Stop' : 'Start'}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <FlatList
          style={styles.recordList}
          data={this.state.latList}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.latListItem} key={item}>
              <Text style={styles.latItemText}>Lap{index + 1}</Text>
              <Text style={styles.latItemText}>{item}</Text>
            </View>
          )}
        >
        </FlatList>
      </View>
    );
  }
}

export default Stopwatch;
