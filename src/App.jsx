import { Card } from "./Card"
import image1 from './assets/img/1.jpeg';
import image2 from './assets/img/2.jpg';
import image3 from './assets/img/3.jpg';
import image4 from './assets/img/4.jpg';
import image5 from './assets/img/5.JPG';

export const App = () => {
  return (
    <>
    <div className="container">

    <Card name="Mami Nanami" user="mami-chan" img={image1}/>
    <Card name="Frieren" user="frieren-sama" img={image2} />
    <Card name="Nino Nakano" user="nakano-nino" img={image3}/>
    <Card name="Fern" user="Fern_01293" img={image3}/>
    <Card name="Chizuru Mizuhara" user="chizuru-ichinose" img={image4}/>
 
    </div>
    </>
  )
}

