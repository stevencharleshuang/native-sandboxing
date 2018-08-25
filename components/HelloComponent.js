import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Dave'
    }
  }
  render() {
    return(
      <View>
        <Text>Hello from Hello Component</Text>
        <Text>Hello, {this.state.name}. I got your name from state</Text>
        <Text>I see you're currently in {this.props.location}. I got that from props</Text>
      </View>
    );
  }
}
