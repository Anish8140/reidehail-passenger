import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
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
    <ScrollView className="flex-1 bg-white" keyboardShouldPersistTaps="handled">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px] bg-primary-500 justify-center items-center">
          <Text className="text-5xl text-white font-JakartaBold tracking-tight">
            Cab Connect
          </Text>
        </View>

        <View className="px-6 py-8 -mt-6 bg-white rounded-t-3xl">
          <Text className="text-3xl text-gray-900 font-JakartaBold mb-2">
            Welcome Back
          </Text>
          <Text className="text-base text-gray-600 font-JakartaRegular mb-8">
            Login to continue your journey
          </Text>
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
            title={loading ? "Signing in…" : "Login"}
            onPress={onSignInPress}
            className="mt-8"
            disabled={loading}
          />

          <View className="flex-row items-center justify-center mt-8">
            <Text className="text-base text-gray-600 font-JakartaRegular">
              Don't have an account?{" "}
            </Text>
            <Link href="/signup">
              <Text className="text-base text-primary-500 font-JakartaSemiBold">
                Create an account
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
