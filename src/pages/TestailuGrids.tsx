

import { IonGrid, IonRow, IonCol, IonContent, IonButton } from '@ionic/react';
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';



const TestailuGrids: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [weather, setWeather] = useState<any>({});
  
    useEffect(() => {
      if (selectedCity) {
        const options = {
          method: 'GET',
          url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
          params: {
            place_id: selectedCity,
          },
          headers: {
            //'X-RapidAPI-Key': '',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
          },
        };
  
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            setWeather(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }, [selectedCity]);

//const TestailuGrids: React.FC = () => {
//function MyComponent() {
  return (
    <IonPage>
    <IonHeader id="H01">
        <IonToolbar>
          <IonTitle id="logo">WeatherApp <label id="logo">&#127783;</label></IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-center">
            <div><h3>The temperature in {selectedCity}:</h3></div>
          <div id="viewTemperature">
          {selectedCity && (
            <p>
            {weather.current?.temperature}°C
            </p>
          )}</div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <h3>Change location</h3>
            <IonButton id="myButton" expand="full" onClick={() => setSelectedCity('Helsinki')}>Helsinki</IonButton>

          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton id="myButton" expand="full" onClick={() => setSelectedCity('London')}>London</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton id="myButton" expand="full" onClick={() => setSelectedCity('Tokyo')}>Tokyo</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
    </IonPage>
  );
}

export default TestailuGrids;
