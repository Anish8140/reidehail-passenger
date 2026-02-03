import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onSignInPress = useCallback(async () => {
    if (!form.email.trim() || !form.password) {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }
    setLoading(true);
    const { error, user } = await login(form.email, form.password);
    setLoading(false);
    if (error) {
      Alert.alert("Login failed", error);
      return;
    }
    if (user?.role === "admin") router.replace("/(admin)");
    else router.replace("/(root)/(tabs)/home");
  }, [form, login]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <View className="absolute bottom-5 left-5">
            <View className="w-32 h-10 mb-1">
              <images.logoHorizontal width="100%" height="100%" />
            </View>
            <Text className="text-2xl text-black font-JakartaSemiBold">
              Welcome 👋
            </Text>
          </View>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title={loading ? "Signing in…" : "Sign In"}
            onPress={onSignInPress}
            className="mt-6"
            disabled={loading}
          />
          <Link
            href="/signup"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
