import { View } from 'react-native'
import AddIcon from 'assets/add-icon.svg'
import UserIcon from 'assets/user-icon.svg'
import styles from './HeaderNav.sass'

export default function HeaderNav() {
  return (
    <View style={styles.headerNav}>
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
  )
}
