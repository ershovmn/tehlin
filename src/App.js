import React from 'react';
import connect from '@vkontakte/vk-connect';
import { View, Panel, ScreenSpinner, PanelHeader } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import FirstLogin from './panels/FirstLogin'
import Home from './panels/Home'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'black',
			fetchedUser: null,
			popout: <ScreenSpinner />,
			token: null
		};
	}

	componentDidMount() {
		connect.sendPromise('VKWebAppGetUserInfo', {})
			.then(data => {
				this.setState({ fetchedUser: data})
				fetch(sessionStorage.getItem('address') + `/api/v0/gettoken?userid=${this.state.fetchedUser.id}`, {
					method: 'GET',
				}).then(data => {
					return data.json()
				}).then(data => {
					if(data.token) {
						sessionStorage.setItem('token', data.token)
						//console.log(sessionStorage.getItem('token'))
						this.setState({
							activePanel: 'home',
							popout: null,
							token: data.token
						})
					} else {
						this.setState({
							activePanel: 'firstlogin',
							popout: null
						})
					}
				})
			})
			.catch(error => {
				console.log(error)
			})
		
		
	}

	go = (panel) => {
		this.setState({
			popout: null,
			activePanel: panel
		})
	}

	render() {
		console.log(this.state)
		return (
			<View activePanel={this.state.activePanel} popout={this.state.popout}>
				<Panel id='black'> </Panel>
				<FirstLogin id='firstlogin' go={this.go} />
				<Home id='home' />
			</View>
		);
	}
}

export default App;
