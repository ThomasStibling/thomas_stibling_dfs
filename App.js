import React from "react";
import { View, StyleSheet, SafeAreaView,Text } from "react-native";
import PasswordInput from "./components/PasswordInput"; 
import EmailInput from "./components/EmailInput"; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <EmailInput />
        <Text></Text>
        <PasswordInput
          minPasswordLength={6}
          maxPasswordLength={15}
          minNumericChars={2}
          minSpecialChars={1}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
