import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});

sessionStorage.setItem('address', 'https://d6efb9d1.ngrok.io')

connect.subscribe((e) => {
    switch (e.detail.type) {
        case 'VKWebAppUpdateConfig':
            let schemeAttribute = document.createAttribute('scheme');
            schemeAttribute.value = e.detail.data.scheme ? e.detail.data.scheme : 'client_light';
            document.body.attributes.setNamedItem(schemeAttribute);
            break;
 
        default:
            //console.log(e.detail.type);
    }
 });

// connect.sendPromise('VKWebAppGetAuthToken', {app_id: 7156583, scope: 'docs'})
//     .then(data => {
//         sessionStorage.setItem('VKtoken', data.access_token)
//         console.log(sessionStorage.getItem('VKtoken'))
//     })
//     .catch(error => {
//         console.log(error);
//         this.setState({activePanel: 'black'})	
//     })

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
