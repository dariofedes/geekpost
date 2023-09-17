import { View } from 'react-native'
import Logo from 'assets/logo.svg'
import AddIcon from 'assets/add-icon.svg'
import UserIcon from 'assets/user-icon.svg'
import styles from './Header.sass'

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo style={styles.header__logo} testID="logo" width={84} height={29} />
      <View style={styles.header__navigation}>
        <AddIcon
          style={styles.header__navIcon}
          testID="add-icon"
          width={29}
          height={29}
        />
        <UserIcon
          style={styles.header__navIcon}
          testID="user-icon"
          width={29}
          height={29}
        />
      </View>
    </View>
  )
}
