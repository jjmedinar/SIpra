import React, { useEffect, useRef } from "react";

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';



import config from '../config.json';



export default function Greeting(props) {
    const mapaDiv=useRef<HTMLDivElement>(null);
    useEffect(() => {
        const webmap = new WebMap({
            portalItem: {
                // autocasts as new PortalItem()
                id: config.IDwebMap
            }
        })
        webmap.load().then(() => {
            const view = new MapView({
                map: webmap,
                container: mapaDiv.current as HTMLDivElement
            });
        })
    }, []); 
    return <div className="mapDiv" ref={mapaDiv}></div>
}



// import React from "react";

// interface GreetingProps{
//     message:string
// }

// export default function Greeting(props:GreetingProps){
//     console.log("Retorna mensaje");
//     return (<div>
//         {props.message}
//     </div>)
// }
