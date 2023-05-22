import React, { useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
export default function YandexMap(){

    const defaultState = {
        center: [55.751574, 37.573856],
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
                <Placemark geometry={[55.684758, 37.738521]}/>
            </Map>
        </YMaps>
        </div>
    )
}