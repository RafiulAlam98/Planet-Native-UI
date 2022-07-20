import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import PlanetHeader from '../components/PlanetHeader';

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
