import { View, Text } from 'react-native'
import { SafeAreaView as RNSafereView } from "react-native-safe-area-context";
import {styled} from 'nativewind'
import { useEffect } from 'react'
import { usePostHog } from 'posthog-react-native'

const SafeAreaView = styled(RNSafereView);

const Subscriptions = () => {
  const posthog = usePostHog()

  useEffect(() => {
    posthog.capture('subscriptions_tab_viewed')
  }, [posthog])

  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>Subscriptions</Text>
    </SafeAreaView>
  )
}

export default Subscriptions