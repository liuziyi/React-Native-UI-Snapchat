import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';

import Camera from './components/Camera';

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      outerScrollEnabled: true 
    }
  }

  verticalScroll = (index) => {
    if(index !== 1){
      this.setState({
        outerScrollEnabled: false
      })
    }else{
      this.setState({
        outerScrollEnabled: true
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            scrollEnabled={this.state.outerScrollEnabled}
          >
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Chat</Text>
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={1}
              onIndexChanged={(index) => this.verticalScroll(index)}
            >
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Search</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Camera></Camera>
              </View>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Memories</Text>
              </View>
            </Swiper>
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Stories</Text>
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
