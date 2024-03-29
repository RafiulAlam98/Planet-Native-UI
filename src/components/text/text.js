import { StyleSheet, Text as RNText, View } from 'react-native';
import { presets } from './text.preset';

export default function Text({ children, preset = 'default', style }) {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
}
