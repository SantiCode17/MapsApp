import { PropsWithChildren, useEffect, useRef } from 'react';
import { usePermissionStore } from '../store/usePermissions';
import { AppState } from 'react-native';
const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission} = usePermissionStore();
  const appState = useRef(AppState.currentState);
  
  useEffect(() => {
    checkLocationPermission();
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {      
      appState.current = nextAppState;
      console.log({nextAppState});
      if(nextAppState === 'active'){
        checkLocationPermission();
      }
    });
    
  
    return () => {
      subscription.remove();
    }
  }, [])
  
  
  
  
  return <>{children}</>
}
export default PermissionsCheckerProvider