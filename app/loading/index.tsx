import { usePermissionStore } from '@/presentation/store/usePermissions';
import { PermissionStatus } from '@/infrastructure/interfaces/location';
import { Redirect } from 'expo-router';

const LoadingScreen = () => {
  const { locationStatus } = usePermissionStore();

  if (locationStatus === PermissionStatus.CHECKING) {
    return null;
  }

  if (locationStatus === PermissionStatus.GRANTED) {
    return <Redirect href="/map" />;
  }

  return <Redirect href="/permissions" />;
}
export default LoadingScreen