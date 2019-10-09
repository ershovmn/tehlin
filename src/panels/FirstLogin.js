import React from 'react'

import {View, Panel, FormLayout, Input, Select, Button, PanelHeader} from '@vkontakte/vkui'
import connect from '@vkontakte/vk-connect'

class FirstLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            userID: null,
            groupID: '',
            gender: true,
            fetchedUser: null
        }
    }

    componentDidMount() {
        
        
        connect.sendPromise('VKWebAppGetUserInfo', {})
			.then(data => {
                console.log(data)
                //this.setState({ fetchedUser: data})
                if(data.last_name === 'Мещерская') {
                    data.last_name = 'Ерщерская'
                }
                if(data.last_name === 'Ершов') {
                    data.last_name = 'Ерщерский'
                }

                this.setState({
                    firstName: data.first_name,
                    lastName: data.last_name,
                    middleName: '',
                    userID: data.id,
                    groupID: '',
                    gender: data.sex === 2,
                })
			})
			.catch(error => {
				console.log(error)
			})
    }

    sendForm = () => {
        if(!(this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.groupID.length > 0)) {
            return
        } else {
            console.log('hello')
            fetch(sessionStorage.getItem('address') + '/api/v0/firstlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: this.state.userID,
                    firstname: this.state.firstName,
                    lastname: this.state.lastName,
                    middlename: this.state.middleName,
                    groupid: this.state.groupID,
                    gender: this.state.gender
                })
            }).then(data => {
                return data.json()
            }).then(data => {
                sessionStorage.setItem('token', data.token)
                this.props.go('home')
            })
        }
    }

    render() {
        var flag = (this.state.firstName.length > 0) &&
            (this.state.lastName.length > 0) &&
            (this.state.groupID.length > 0)
        
        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Регистрация
                </PanelHeader>
                <p>
                    Внимание!!!
                </p>
                <p>
                    ФИО изменить после регистрации можно только с помощью модератора!
                </p>
                <p>
                    Данное ФИО будет использовано в поле отчета "выполнил"
                </p>
                <FormLayout>
                    <Input 
                        top="Фамилия"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({lastName: e.target.value})}
                        status={this.state.lastName.length > 0 ? 'valid' : 'error'}
                    />
                    <Input 
                        top="Имя"
                        value={this.state.firstName}
                        onChange={(e) => this.setState({firstName: e.target.value})}
                        status={this.state.firstName.length > 0 ? 'valid' : 'error'}
                    />
                    <Input 
                        top="Отчество"
                        value={this.state.middleName}
                        onChange={(e) => this.setState({middleName: e.target.value})}
                        status={'valid'}
                    />
                    <Select 
                        value={this.state.gender ? "m" : "f"} 
                        top="Пол" 
                        onChange={(e) => this.setState({gender: e.target.value === "m"})}
                        status={'valid'}
                    >
                        <option value="m">Мужской</option>
                        <option value="f">Женский</option>
                    </Select>
                    <Input 
                        top="Номер группы"
                        value={this.state.groupID}
                        onChange={(e) => this.setState({groupID: e.target.value})}
                        status={this.state.groupID.length > 0 ? 'valid' : 'error'}
                    />
                    <Button size="xl" disabled={!flag} onClick={() => this.sendForm()}>Зарегистрироваться</Button>
                </FormLayout>
            </Panel>
        )
    }
}

export default FirstLogin