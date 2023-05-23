import React, { useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
export default function YandexMap(){

    const defaultState = {
        center: [41.299496, 69.240074],
        zoom: 5,
        height: '100%',
        width: '100%'
    };
    const mapContainerStyle = {
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
    return(
        <div style={mapContainerStyle}>
        <YMaps query={{apikey: "199cc83c-14dd-49b7-ade3-a0480a09ad5d"}}>
            <Map className='map' defaultState={defaultState}>
                <Placemark geometry={[41.299496, 69.240074]}/>
            </Map>
        </YMaps>
        </div>
    )
}