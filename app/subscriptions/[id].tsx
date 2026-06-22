import { View, Text } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView as RNSafereView } from "react-native-safe-area-context";
import {styled} from 'nativewind'
import { useEffect } from 'react'
import { usePostHog } from 'posthog-react-native'

const SafeAreaView = styled(RNSafereView);


const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const posthog = usePostHog()

  useEffect(() => {
    posthog.capture('subscription_detail_viewed', { subscription_id: id })
  }, [id, posthog])

  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>SubscriptionDetails: {id}</Text>
      <Link href={"/"}>Go back</Link>
    </SafeAreaView>
  )
}

export default SubscriptionDetails