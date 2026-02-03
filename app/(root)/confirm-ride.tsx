import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
// import { useDriverStore } from "@/store";

const ConfirmRide = () => {
  // const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  const drivers = [
    {
      id: 1,
      name: "Driver 1",
      rating: 4.5,
      price: 100,
      time: 1000,
    },
  ];
  const selectedDriver = drivers[0];
  const setSelectedDriver = (driverId: number) => {
    console.log(driverId);
  };

  return (
    <>
      <Text className="text-2xl font-bold">Confirm Ride</Text>
    </>
    // <RideLayout title={"Choose a Rider"} snapPoints={["65%", "85%"]}>
    //   {/* <FlatList
    //     data={drivers}
    //     keyExtractor={(item, index) => index.toString()}
    //     renderItem={({ item, index }) => (
    //       // <DriverCard
    //       //   item={{
    //       //     id: item.id,
    //       //     // name: item.name,
    //       //     rating: item.rating,
    //       //     price: item.price.toString(),
    //       //     time: item.time,
    //       //   }}
    //       //   selected={selectedDriver!}
    //       //   setSelected={() => setSelectedDriver(item.id!)}
    //       // />
    //     // )}
    //     ListFooterComponent={() => (
    //       <View className="mx-5 mt-10">
    //         <CustomButton
    //           title="Select Ride"
    //           onPress={() => router.push("/(root)/book-ride")}
    //         /> */}
    //       </View>
    //     )}
    //   />
    // </RideLayout>
  );
};

export default ConfirmRide;
