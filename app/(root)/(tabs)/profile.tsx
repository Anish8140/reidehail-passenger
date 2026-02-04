import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/InputField";
import { useAuth } from "@/contexts/AuthContext";
import { icons } from "@/constants";

function formatDate(iso?: string) {
  if (!iso) return "—";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

const Profile = () => {
  const { session, isLoading } = useAuth();
  const router = useRouter();
  const user = session?.user;

  useEffect(() => {
    if (!isLoading && !session) {
      router.replace("/(auth)/welcome");
    }
  }, [isLoading, session, router]);

  if (isLoading || !user) {
    return (
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center px-5">
          <Text className="font-Jakarta text-general-500">Loading…</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-JakartaBold my-5">My profile</Text>

        <View className="flex items-center justify-center my-5">
          <View className="rounded-full h-[110px] w-[110px] items-center justify-center overflow-hidden border-[3px] border-white  shadow-sm shadow-neutral-300 border-2 border-general-400">
            <Image
              source={{uri: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-100 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="Name"
              value={user.name || "—"}
              icon={icons.person}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
            <InputField
              label="Email"
              value={user.email || "—"}
              icon={icons.email}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
            <InputField
              label="Role"
              value={user.role || "—"}
              icon={icons.person}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
            <InputField
              label="Addess"
              value={"123 Main street, San Francisco, USA"}
              // icon={icons.person}
              containerStyle="w-full h-32"
              // inputStyle="p-3.5"
              editable={false}
            />
            <InputField
              label="Member since"
              value={formatDate(user.createdAt)}
              icon={icons.person}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;