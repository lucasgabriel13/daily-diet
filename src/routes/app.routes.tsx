import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GeneralStatistics } from '@screens/GeneralStatistics';
import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { RegistrationCompletion } from '@screens/RegistrationCompletion';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={GeneralStatistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="registrationCompletion" component={RegistrationCompletion} />
    </Navigator>
  );
}