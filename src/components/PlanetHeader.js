import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from './text/text';
import { spacing } from '../../src/theme/spacing';
import { colors } from '../../src/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

export default function PlanetHeader({ backBtn }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {backBtn && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            style={{ marginRight: spacing[2] }}
            name="chevron-back"
            size={24}
            color="white"
          />
        </Pressable>
      )}
      <Text preset="h2">THE PLANETS</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
