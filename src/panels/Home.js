import React from 'react'

import {View, Panel, Epic, Tabbar, TabbarItem, PanelHeader} from '@vkontakte/vkui'

import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24LogoLivejournal from '@vkontakte/icons/dist/24/logo_livejournal';

import Reports from './Reports'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            activeStory: 'reports',
            superuser: false,
        }
    }

    componentDidMount() {
        fetch(`${sessionStorage.getItem('address')}/api/v0/superuser`, {
            method: 'GET',
            headers: {
                'tehnarenok-token': sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json()
        }).then(data => {
            this.setState({superuser: data.superuser})
        })
    }

    render() {
        var textView = false;
        return (
            <Epic id={this.props.id} activeStory={this.state.activeStory} tabbar ={
                <Tabbar>
                    <TabbarItem
                        onClick={() => this.setState({activeStory: 'reports'})}
                        selected={this.state.activeStory === 'reports'}
                        text={textView ? 'Отчеты' : null }
                    >
                        <Icon24Note />
                    </TabbarItem>

                    {this.state.superuser && 
                        <TabbarItem
                            onClick={() => this.setState({activeStory: 'admin'})}
                            selected={this.state.activeStory === 'admin'}
                            text={textView ? 'Управление' : null }
                        >
                            <Icon24LogoLivejournal/>
                        </TabbarItem>
                    }
                    
                    <TabbarItem 
                        onClick={() => this.setState({activeStory: 'settings'})}
                        selected={this.state.activeStory === 'settings'}
                        text={textView ? 'Настройки' : null }
                    >
                        <Icon24Settings />
                    </TabbarItem>

                    
                </Tabbar>
            }>
                <Reports id='reports' />
                <View id='settings' activePanel='settings'>
                    <Panel id='settings'>
                        <PanelHeader>
                            Настройки
                        </PanelHeader>
                    </Panel>
                </View>

                <View id='admin' activePanel='admin'>
                    <Panel id='admin'>
                        <PanelHeader>
                            Управление
                        </PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default Home