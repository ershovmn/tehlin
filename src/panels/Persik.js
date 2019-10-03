import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import persik from '../img/persik.png';
import './Persik.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from '@vkontakte/vk-connect'

class Persik extends React.Component {
	osname = platform();

	constructor() {
		super()
		this.state = {

		}
	}

	componentDidMount() {
		connect.send('VKWebAppGetGeodata', {})
		connect.sendPromise('VKWebAppOpenPayForm', {'app_id': 7156583, 'action': 'pay-to-user', 'params': {amount: 1, user_id: 188163112}})
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader
					left={<HeaderButton onClick={this.props.go} data-to="home">
						{this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</HeaderButton>}
				>
					Persik
				</PanelHeader>
				<img className="Persik" src={persik} alt="Persik The Cat"/>
			</Panel>
		)
	}
}


export default Persik;
