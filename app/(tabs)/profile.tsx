import ProfilePage from "@/pages/profilePage"
import SignInPage from '@/pages/signInPage'
import { RootState } from '@/store'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
export default function ProfileScreen() {
  const isLoggedIn = useSelector((state: RootState) => state.util.isLoggedIn)

  return (
    <SafeAreaView>
      <Text>
        {isLoggedIn ? <ProfilePage /> : <SignInPage />}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})