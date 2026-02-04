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
  const [rememberMe, setRememberMe] = useState(false);

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
          <Text className="text-2xl font-JakartaBold text-gray-900 mb-1">
            Welcome Back
          </Text>
          <Text className="text-sm text-gray-600 font-JakartaRegular mb-6">
            Login to continue your journey
          </Text>

          <View className="mb-4">
            <InputField
              label="Email"
              placeholder="Enter email"
              icon={icons.email}
              textContentType="emailAddress"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
              containerStyle="mb-4"
            />

            <InputField
              label="Password"
              placeholder="Enter password"
              icon={icons.lock}
              secureTextEntry
              textContentType="password"
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              containerStyle="mb-1"
            />
          </View>

          <CustomButton
            title={loading ? "Signing in…" : "Login"}
            onPress={onSignInPress}
            className="shadow-none py-4 mb-4"
            disabled={loading}
            bgVariant="success"
          />

          <Link
            href="/signup"
            className="text-sm text-center text-gray-500 pb-8"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500 font-JakartaSemiBold">Create an account</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
