import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/PlanetHeader';
import { colors } from '../theme/colors';
import { FlatList } from 'react-native';
import { PLANET_LIST } from '../data/PlanetList';
import { spacing } from '../../src/theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <Text preset="h3" style={styles.textItem}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.lists}
        data={PLANET_LIST}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
