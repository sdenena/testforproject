import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    };
  }

        
  url="http://www.knongdai.com/api/v1/categories";

  componentDidMount(){
      fetch(url)
      .then(response => response.json())
      .then(json => {
          this.setState({
              data:json
          })
          console.log(data)
      })
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
