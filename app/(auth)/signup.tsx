import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { useAuth } from "@/contexts/AuthContext";
import { icons, images } from "@/constants";

const SignUp = () => {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = useCallback(async () => {
    if (!form.name.trim()) {
      Alert.alert("Error", "Please enter your name.");
      return;
    }
    if (!form.email.trim()) {
      Alert.alert("Error", "Please enter your email.");
      return;
    }
    if (!form.password) {
      Alert.alert("Error", "Please enter a password.");
      return;
    }
    setLoading(true);
    const { error, user } = await signup(form.email, form.password, form.name, "passenger");
    setLoading(false);
    if (error) {
      Alert.alert("Sign up failed", error);
      return;
    }
    if (user?.role === "admin") router.replace("/(admin)");
    else router.replace("/(root)/(tabs)/home");
  }, [form, signup]);


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
              Create Your Account
            </Text>
          </View>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title={loading ? "Signing up…" : "Sign Up"}
            onPress={onSignUpPress}
            className="mt-6"
            disabled={loading}
          />
          <Link
            href="/login"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;