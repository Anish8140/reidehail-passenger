import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { icons } from "@/constants";

const RideLayout = ({
  title,
  snapPoints,
  children,
}: {
  title: string;
  snapPoints?: string[];
  children: React.ReactNode;
}) => {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 bg-blue-500">
        <View className="absolute z-10 top-16 flex-row items-center justify-start px-5">
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
              <Image
                source={icons.backArrow}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </View>
          </TouchableOpacity>
          <Text className="text-xl font-JakartaSemiBold ml-5 text-white">
            {title || "Go Back"}
          </Text>
        </View>

        <Map />
      </View>

      {/* Bottom panel (replaces @gorhom/bottom-sheet to avoid Reanimated crash in Expo Go) */}
      <View className="bg-white rounded-t-3xl flex-1 max-h-[60%] min-h-[40%]">
        <ScrollView
          className="flex-1 px-5 pt-4 pb-8"
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    </View>
  );
};

export default RideLayout;
