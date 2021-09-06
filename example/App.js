import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Progress from 'react-native-awesome-progress';

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (value < 100) {
        setValue(value + 25);
      } else {
        setValue(0);
      }
    }, 1000);
  }, [value]);

  return (
    <View style={styles.container}>
      <Text>Sa</Text>
      <View style={{ padding: 4, width: "100%" }}>
        <Progress height={24} value={value} duration={100} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
