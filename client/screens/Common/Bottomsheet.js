import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function Bottomsheet() {
  const renderContent = () => (
    <View 

    style={{display:"flex",flexDirection:"column",height:"100%"}}
    >

     <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:50}}><Text>Active</Text></View>
     <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:50}}><Text>Busy</Text></View>
     <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:50}}><Text>Inactive</Text></View>
      
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(250)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[1, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}