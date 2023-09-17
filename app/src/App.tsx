import { SafeAreaView } from 'react-native'
import Feed from './Feed/Feed'
import { Header } from '@shared/components'

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <Feed />
    </SafeAreaView>
  )
}
