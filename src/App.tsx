import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import MyMap from './components/Mapa';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import config from './config.json';

import './App.css';


export default function App(props) {
  return (<div className="mapDiv">
    <MyMap/>  
    </div>)
}
