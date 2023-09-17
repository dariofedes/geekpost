import { TouchableOpacity } from 'react-native'
import styles from './NavButton.sass'

export default function NavButton({ Icon, onPress, ...props }: NavButtonProps) {
  return (
    <TouchableOpacity style={styles.navButton} onPress={onPress} {...props}>
      <Icon style={styles.navButton__icon} />
    </TouchableOpacity>
  )
}

type NavButtonProps = {
  Icon: React.ComponentType
  onPress: () => void
}
