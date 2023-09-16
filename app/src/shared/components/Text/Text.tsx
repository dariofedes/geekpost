import { Text as RNText, TextStyle } from 'react-native'
import styles from './Text.sass'

export default function Text({
  children,
  style,
}: {
  children: string
  style?: TextStyle
}) {
  return <RNText style={[styles.text, style]}>{children}</RNText>
}
