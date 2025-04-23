import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export function useLocation() {
    const [endereco, setEndereco] = useState<string | null>(null);

        useEffect(() => {
            (async () => {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if(status !== 'granted') return;

                const location = await Location.getCurrentPositionAsync({});
                const [place] = await Location.reverseGeocodeAsync(location.coords)
                if(place){
                    setEndereco(`${place.name}, ${place.subregion}/${place.region}`)
                }
            })();
        }, []);

        return endereco;
}