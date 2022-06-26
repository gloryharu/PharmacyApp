import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Question = ({item}) => {
  const [isCollapse, setIsCollapse] = useState(true);
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        </View>
        <Ionicons
          onPress={() => setIsCollapse(!isCollapse)}
          name={
            isCollapse ? 'ios-chevron-down-circle' : 'ios-chevron-up-circle'
          }
          size={25}
        />
      </View>
      <Collapsible collapsed={isCollapse}>
        <View style={{paddingVertical: 10}}>
          <Text style={{textAlign: 'auto'}}>{item.content}</Text>
        </View>
      </Collapsible>
      <View style={[styles.lineStyle, {marginBottom: 20, marginTop: 5}]} />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({

});
