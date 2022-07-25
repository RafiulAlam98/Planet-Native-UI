import { View, ScrollView, StyleSheet, Pressable, Linking } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import PlanetHeader from '../components/PlanetHeader';
import { spacing } from '../theme/spacing';
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from '../svg/index';

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const renderImage = () => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />;
      case 'venus':
        return <VenusSvg />;
      case 'earth':
        return <EarthSvg />;
      case 'mars':
        return <MarsSvg />;
      case 'jupiter':
        return <JupiterSvg />;
      case 'saturn':
        return <SaturnSvg />;
      case 'uranus':
        return <UranusSvg />;
      case 'neptune':
        return <NeptuneSvg />;
    }
  };
  const linkingWiki = () => {
    Linking.openURL(wikiLink);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>
          <Text>{renderImage(name)}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text preset="h4" style={styles.descriptionView}>
            {description}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            linkingWiki(wikiLink);
          }}
          style={styles.source}
        >
          <Text>Source:</Text>
          <Text
            style={{
              textDecoration: 'underline',
              fontWeight: 'bold',
              marginLeft: spacing[2],
            }}
          >
            Wikipedia
          </Text>
          <View style={{ height: 40 }} />
        </Pressable>
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  descriptionView: {
    marginTop: spacing[4],
    textAlign: 'center',
    lineHeight: 27,
  },
  source: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[4],
  },
  planetSection: {
    borderWidth: 1,
    borderColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: spacing[4],
    padding: spacing[4],
    marginVertical: spacing[2],
  },
});
