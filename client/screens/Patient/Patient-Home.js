import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext';

const PatientHome = () => {

    const { userInfo } = useContext(AuthContext);

    console.log(userInfo, "user Info");

  return (
    <View>
      <Text>PatientHome</Text>
    </View>
  )
}

export default PatientHome;