import { PermissionStatus } from '@/infrastructure/interfaces/location';
import { ThemedText } from '@/presentation/components/shared/themed-text';
import ThemedPressable from '@/presentation/components/shared/ThemedPressable';
import { usePermissionStore } from '@/presentation/store/usePermissions';
import { Redirect } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();
  if (locationStatus === PermissionStatus.GRANTED) {
    return <Redirect href="/map" />;
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación para mostrar mapa
      </ThemedPressable>
      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </SafeAreaView>
  );
};
export default PermissionsScreen;