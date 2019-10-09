import React from 'react'
import {View, Panel, PanelHeader, ScreenSpinner, List, Cell, Group, platform, IOS, HeaderButton, Input} from '@vkontakte/vkui'

import ReportDraggingList from './Report/ReportDraggingList'

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


class Reports extends React.Component {
    constructor() {
        super()
        this.state = {
            activePanel: 'reports',
            reports: [],
            popout: <ScreenSpinner />,
            isFetching: false,
            reportID: null,
            error: false
        }

        //this.goTo = this.goTo.bind(this)
    }

    componentDidMount() {
        this.setState({popout: <ScreenSpinner />})
        fetch(sessionStorage.getItem('address') + '/api/v0/allreports', {
            method: 'GET',
            headers: {
                'tehnarenok-token': sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json()
        }).then(data => {
            this.setState({reports: data.reports, popout: null})
        })
    }

    onRefresh = () => {
        this.setState({popout: <ScreenSpinner />})
        fetch(sessionStorage.getItem('address') + '/api/v0/allreports', {
            method: 'GET',
            headers: {
                'tehnarenok-token': sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json()
        }).then(data => {
            console.log(data)
            if(data.error) {
                this.setState({activePanel: 'error'})
                return
            }
            this.setState({popout: null, reports: data.reports})
        })
    }

    onClickReport = (reportID, type) => {
        switch (type) {
            case 'draggingList':
                this.setState({activePanel: 'reportdragginglist', reportID: reportID})
                break
            default:
                this.setState({activePanel: 'reportlab2', reportID: reportID})
                break
        }
    }

    goTo = (activePanel) => {
        console.log('goTo')
        this.setState({activePanel: activePanel})
    }

    loadReport = (files) => {
        console.log(files);
        var formdata = new FormData()
        formdata.append('file', files[0])
        fetch(`${sessionStorage.getItem('address')}/api/v1/report/${this.state.reportID}/createreport`, {
            method: 'POST',
            headers: {
                'tehnarenok-token': sessionStorage.getItem('token'),
            },
            body: formdata
        }).then(data => {
            return data.blob()
        }).then(data => {
            console.log(data)
            let url = window.URL.createObjectURL(data)
            console.log(url)
            let a = document.createElement('a')
            a.href = url
            a.download = `лаба.docx`
            a.click()
        })
    }

    render() {
        //console.log(this.props)
        console.log(this.state)
        if(this.state.activePanel === 'reportdragginglist') {
            return (
                <ReportDraggingList id='reportdragginglist' reportID={this.state.reportID} goTo={() => this.setState({activePanel: 'reports'})}/>
            )
        }
        if(this.state.activePanel === 'reportlab2') {
            return (
                //<View id={this.props.id} activePanel='main'>
                    <Panel id={this.props.id}>
                        <Input type='file' onChange={(e) => this.loadReport(e.target.files)} accept="image/png"/>
                    </Panel>
                //</View>
            )
        }
        return (
            <View id={this.props.id} activePanel={this.state.activePanel} popout={this.state.popout}>
                <Panel id='reports'>
                    <PanelHeader
                        left={<HeaderButton onClick={() => console.log('test')}><Icon24Back /></HeaderButton>}
                    >
                        Отчеты
                    </PanelHeader>
                    <Group>
                        <List>
                            {this.state.reports && this.state.reports.length > 0 && this.state.reports.map((value) => {
                                return (
                                    <Cell 
                                        key={value._id} 
                                        description={value.discription}
                                        onClick={() => this.onClickReport(value._id, value.structureID)}
                                    >{value.name}</Cell>
                                )
                            })}
                        </List>
                    </Group>
                </Panel>
                <Panel id='error'>
                    <PanelHeader
                        left={<HeaderButton onClick={() => this.setState({activePanel: 'reports'})}>{platform() === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                    >
                        Ошибка
                    </PanelHeader>
                </Panel>
                
            </View>
        )
    }
}

export default Reports