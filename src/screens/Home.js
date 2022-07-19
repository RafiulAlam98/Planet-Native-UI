import { View, StyleSheet } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/PlanetHeader';
import { colors } from '../theme/colors';
import { FlatList } from 'react-native';
import { PLANET_LIST } from '../data/PlanetList';
import { spacing } from '../../src/theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PlanetHeader />
        <FlatList
          contentContainerStyle={styles.lists}
          data={PLANET_LIST}
          renderItem={({ item }) => {
            const { name, color } = item;
            return (
              <View style={styles.item}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.circle, { backgroundColor: color }]} />
                  <Text preset="h3" style={styles.textItem}>
                    {name}
                  </Text>
                </View>
                <AntDesign name="right" size={18} color="white" />
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    color: colors.white,
    padding: spacing[5],
    textTransform: 'uppercase',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textItem: {
    color: colors.white,
    marginLeft: spacing[4],
    textTransform: 'uppercase',
  },
  lists: {
    padding: spacing[5],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.7,
  },
});