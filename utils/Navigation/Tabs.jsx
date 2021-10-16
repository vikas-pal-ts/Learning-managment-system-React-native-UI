import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import If from '../../components/If';
import { CourseSvg, ProfileSvg, SettingSvg } from '../../svgs/BottomMenuSvg';

const Tabs = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row',justifyContent:"center",alignItems:"center", height: 98, borderTopLeftRadius:16, borderTopRightRadius:16,  borderWidth:1,borderColor:'#BEBAB3' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          
  
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems:"center" }}
            >
              <If show={route.name === 'Courses'}>
                  <SettingSvg color={isFocused ? '#E3562A' : '#BEBAB3'} />
              </If>
              <If show={route.name === 'Profile'}>
                  <ProfileSvg color={isFocused ? '#E3562A' : '#BEBAB3'} />
              </If>
              <If show={route.name === 'Settings'}>
                  <SettingSvg color={isFocused ? '#E3562A' : '#BEBAB3'} />
              </If>
              
              <Text style={{ color: isFocused ? '#E3562A' : '#BEBAB3', marginTop:8 }}>
                {label}
              </Text>
             
            </TouchableOpacity>
          );
        })}
      </View>
    )
}

export default Tabs

const styles = StyleSheet.create({})
