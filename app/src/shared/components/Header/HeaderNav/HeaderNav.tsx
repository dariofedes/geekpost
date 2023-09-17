import { View } from 'react-native'
import AddIcon from 'assets/add-icon.svg'
import ProfileIcon from 'assets/user-icon.svg'
import styles from './HeaderNav.sass'
import NavButton from './NavButton/NavButton'

export default function HeaderNav() {
  return (
    <View style={styles.headerNav}>
      <NavButton
        testID="add-post-nav-button"
        Icon={AddIcon}
        onPress={() => alert('will add post')}
      />
      <NavButton
        testID="profile-nav-button"
        Icon={ProfileIcon}
        onPress={() => alert('will navigate to profile')}
      />
    </View>
  )
}
