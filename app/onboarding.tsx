import { View, Text } from 'react-native'
import { SafeAreaView as RNSafereView } from "react-native-safe-area-context";
import {styled} from 'nativewind'
import { useEffect } from 'react'
import { usePostHog } from 'posthog-react-native'

const SafeAreaView = styled(RNSafereView);


const Onboarding = () => {
  const posthog = usePostHog()

  useEffect(() => {
    posthog.capture('onboarding_viewed')
  }, [posthog])

  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>onboarding</Text>
    </SafeAreaView>
  )
}

export default Onboarding