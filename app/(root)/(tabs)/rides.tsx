// import { useUser } from "@clerk/clerk-expo";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";
import InputField from "@/components/InputField";
import { formatDate } from "@/lib/utils";
import pin from "@/assets/icons/pin.png";
const Rides = () => {
  // const { user } = useUser();

  // const {
  //   data: recentRides,
  //   loading,
  //   error,
  // } = useFetch<Ride[]>(`/(api)/ride/`);
  const recentRides: Ride[] = [];
  const loading = false;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-2xl font-JakartaBold my-5 text-center">
        Lets go somewhere
      </Text>
      <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="From"
              value={"123 Main street, San Francisco, USA"}
              icon={icons.pin}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
            <InputField
              label="To"
              value={"123 Main street, San Francisco, USA"}
              icon={icons.pin}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
            <Text className="text-sm text-neutral-500 font-JakartaSemiBold">Note: The difference between this location is 100 miles and the estimated time is 2 hours and 30 minutes</Text>
           <InputField
              label=""
              value={"Submit"}
              // icon={pin}
              containerStyle="w-full bg-primary-500 rounded-xl "
              inputStyle="p-3.5 text-white font-JakartaSemiBold text-center"
              editable={false}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Rides;
