import React from 'react';
import { View, ActivityIndicator } from 'react-native'

export default function Loading() {
  return (
  	<View style={{flex: 1, padding: 20}}>
      <ActivityIndicator/>
    </View>);
}
