import { View, Text } from 'react-native'
import { SafeAreaView as RNSafereView } from "react-native-safe-area-context";
import {styled} from 'nativewind'

const SafeAreaView = styled(RNSafereView);


const Insights = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>Insights</Text>
    </SafeAreaView>
  )
}

export default Insights