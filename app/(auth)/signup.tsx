import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";

const SignUp = () => {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
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
    try {
      const result = await signup(form.email, form.password, form.name, "passenger");
      setLoading(false);
      if (result && result.error) {
        Alert.alert("Sign up failed", result.error);
        return;
      }
      if (result && result.user) {
        if (result.user.role === "admin") router.replace("/(admin)");
        else router.replace("/(root)/(tabs)/home");
      }
    } catch (e) {
      setLoading(false);
      Alert.alert("Error", "An unexpected error occurred");
      console.error(e);
    }
  }, [form, signup]);

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
            Create Your Account
          </Text>
          <Text className="text-base text-gray-600 font-JakartaRegular mb-8">
            Sign up to start your journey
          </Text>

          <View className="mb-6">
            <InputField
              label="Full Name"
              placeholder="Enter name"
              icon={icons.person}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
              containerStyle="mb-1"
            />
            <InputField
              label="Email"
              placeholder="Enter email"
              icon={icons.email}
              textContentType="emailAddress"
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
              containerStyle="mb-1"
            />
            <InputField
              label="Password"
              placeholder="Enter password"
              icon={icons.lock}
              secureTextEntry={true}
              textContentType="password"
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              containerStyle="mb-1"
            />
            <InputField
              label="Confirm Password"
              placeholder="Repeat password"
              icon={icons.lock}
              secureTextEntry={true}
              textContentType="password"
              value={form.password}
              onChangeText={() => { }}
              containerStyle="mb-1"
            />

            <TouchableOpacity className="flex-row items-center mb-6" onPress={() => setRememberMe(!rememberMe)}>
              <View className={`w-5 h-5 rounded border items-center justify-center mr-3 ${rememberMe ? 'bg-primary-500 border-primary-500' : 'bg-white border-gray-300'}`}>
                {rememberMe && <Image source={icons.checkmark} className="w-3 h-3" resizeMode="contain" style={{ tintColor: 'white' }} />}
              </View>
              <Text className="font-JakartaMedium text-sm text-gray-700">Remember me</Text>
            </TouchableOpacity>

            <CustomButton
              title={loading ? "Signing up…" : "Sign Up"}
              onPress={onSignUpPress}
              className="shadow-none py-4"
              disabled={loading}
              bgVariant="success"
            />
          </View>

          <View className="flex-row justify-center items-center my-6 gap-x-3">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="text-sm text-gray-400 font-JakartaMedium">Or Login with</Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          <View className="flex-row gap-3 mb-6">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-gray-200 rounded-lg py-3" onPress={() => { }}>
              <Image source={icons.google} className="w-5 h-5 mr-2" resizeMode="contain" />
              <Text className="font-JakartaSemiBold text-sm text-gray-700">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-gray-200 rounded-lg py-3" onPress={() => { }}>
              <Text className="font-JakartaSemiBold text-base mr-2">🍎</Text>
              <Text className="font-JakartaSemiBold text-sm text-gray-700">Apple</Text>
            </TouchableOpacity>
          </View>

          <Link
            href="/login"
            className="text-sm text-center text-gray-500 pb-8"
          >
            Already have an account?{" "}
            <Text className="text-primary-500 font-JakartaSemiBold">Login</Text>
          </Link>
        </View>

        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">Verification</Text>
            <Text className="font-Jakarta mb-5">We've sent a code to {form.email}</Text>
            <InputField
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) => setVerification({ ...verification, code })}
            />
            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <CustomButton title="Verify" onPress={() => { }} className="mt-5" />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};
export default SignUp;
