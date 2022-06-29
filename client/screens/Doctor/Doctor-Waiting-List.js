import { View, Text } from 'react-native'
import React from 'react'
import { waitingDoctorList } from '../../constants/WaitingForDoctor';
import WaitingCard from '../../components/WaitingCard';

const DoctorWaitingList = () => {


    return (
        <View>
            {
                waitingDoctorList.map((data, index) => {
                    return <WaitingCard key={index} item={data} />
                })
            }
        </View>
    )
}

export default DoctorWaitingList;