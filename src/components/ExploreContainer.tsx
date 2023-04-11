import './ExploreContainer.css';
import { Link } from 'react-router-dom';
import { IonButton } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <h1>Welcome to tiny Weather App</h1>
      <Link to="/weather">
        <IonButton>Weather page</IonButton>
      
      </Link>
    </div>
  );
};

export default ExploreContainer;
