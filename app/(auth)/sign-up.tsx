import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import { usePostHog } from 'posthog-react-native'

const SignUp = () => {
  const posthog = usePostHog()

  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up" onPress={() => posthog.capture('sign_up_initiated')}>Create Account</Link>
    </View>
  )
}

export default SignUp