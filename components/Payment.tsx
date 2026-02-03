import { View, Text } from 'react-native'
import React from 'react'

const Payment = ({ fullName, email, amount, driverId, rideTime }: { fullName: string, email: string, amount: string, driverId: number, rideTime: number }) => {
  return (
    <View>
      <Text>Payment</Text>
      <Text>{fullName}</Text>
      <Text>{email}</Text>
      <Text>{amount}</Text>
      <Text>{driverId}</Text>
      <Text>{rideTime}</Text>
    </View>
  )
}

export default Payment