import './contacts.css'
import img1 from './../../../sources/footer/tg.svg'
import img2 from './../../../sources/footer/ws.svg'
import img3 from './../../../sources/footer/vk.svg'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const defaultState = {
    center: [55.766825, 37.600945],
    zoom: 16,
};

const darkTheme = [
    {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
        { "invert_lightness": true },
        { "saturation": -100 },
        { "lightness": 65 },
        { "gamma": 0.6 },
        { "hue": "#ffff00" }
      ]
    }
  ];

const Contacts = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="section-title white">CONTACTS</div>
                <div className="footer-wrapper">
                    <div className="footer-text">
                        Рок-кафе “Вкус ностальгии”. Адрес: ул. Тверская, д. 23.
                    </div>
                    <ul className="contacts">
                        <li><a href="#!"><img src={img1} alt="" /></a></li>
                        <li><a href="#!"><img src={img2} alt="" /></a></li>
                        <li><a href="#!"><img src={img3} alt="" /></a></li>
                        <li><a href="#!">+7(495) 123-45-67</a></li>
                    </ul>
                </div>
            </div>
            <YMaps>
                <Map defaultState={defaultState} className='map' options={{ styles: darkTheme }}>
                    <Placemark geometry={[55.766825, 37.600945]} />
                </Map>
            </YMaps>


        </footer>
    );
}

export default Contacts;