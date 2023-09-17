import { View } from 'react-native'
import Logo from 'assets/logo.svg'
import styles from './Header.sass'
import HeaderNav from './HeaderNav/HeaderNav'

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo style={styles.header__logo} testID="logo" width={84} height={29} />
      <HeaderNav />
    </View>
  )
}
