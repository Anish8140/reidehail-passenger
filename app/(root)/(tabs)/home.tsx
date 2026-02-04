import GoogleTextInput from '@/components/GoogleTextInput'
import RideCard from '@/components/RideCard'
import StaticMap from '@/components/StaticMap'
import { icons } from '@/constants'
import { mockRides } from '@/constants/mock-rides'
import { Ride } from '@/types/type'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={mockRides}
        renderItem={({ item }) => (
          <RideCard ride={item as unknown as Ride} />
        )}
        keyExtractor={(item) => item.ride_id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Text className="text-2xl font-bold">No rides found</Text>
          </View>
        }
        ListHeaderComponent={
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-2xl font-JakartaExtraBold">
                Welcome John Doe👋
              </Text>
              <TouchableOpacity
                onPress={() => console.log('sign out')}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4 text-white" />
              </TouchableOpacity>
            </View>

            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={() => console.log('search')}
            />

            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your current location
              </Text>
              <View className="flex flex-row items-center bg-transparent h-[300px]">
                <StaticMap />
              </View>
            </>

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        }
      />
    </SafeAreaView>
  )
}

export default Home