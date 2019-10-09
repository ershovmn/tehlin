import React from 'react'

import {View, Panel, PanelHeader, ScreenSpinner, Group, List, Cell, platform, IOS, HeaderButton, Input, Button, ModalRoot, ModalPage, ModalPageHeader, ModalCard, Textarea, Div} from '@vkontakte/vkui'

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Done from '@vkontakte/icons/dist/24/done';

class ReportDraggingList extends React.Component {
    constructor() {
        super()
        this.state = {
            activePanel: 'main',
            activeModal: null,
            name: 'hello',
            popout: <ScreenSpinner />,
            report: {},
            items: [],
            editItem: null,
            itemID: null,
            files: null,
        }
    }

    componentDidMount() {
        fetch(`${sessionStorage.getItem('address')}/api/v0/report/${this.props.reportID}/getdata`, {
            method: 'GET',
            headers: {
                'tehnarenok-token': sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.json()
        }).then(data => {
            if(data.error) {
                this.props.goTo('error')
                return
            }
            this.setState({report: data.report, popout: null})
        })
    }

    addElement = () => {
        this.setState({activeModal: 'addelement'})
    }

    addNewElement = (elementID) => {
        var {items} = this.state 
        
        if(elementID[0] === 'h') {
            items.push({
                type: elementID,
                inputType: 'string',
                modify: true,
                description: elementID,
                value: ''
            })
        } else if (elementID === 'text') {
            items.push({
                type: 'text',
                inputType: 'text',
                modify: true,
                description: elementID,
                value: ''
            })
        }
        
        this.setState({items: items})
    }

    editElement = (id) => {
        var {items} = this.state
        var item = items[id]
        if(!item.modify) {
            return
        }

        this.setState({
            activeModal: 'edit',
            editItem: item,
            itemID: id
        })

    }

    uploadFiles = (inputFiles) => {
        var {files, items} = this.state
        files = inputFiles
        var newItems = []
        items.map(value => {
            if(value.type !== 'file') {
                newItems.push(value)
            }
        })
        for(var i = 0; i < files.length; i++) {
            var value = files[i]
            newItems.push({
                type: 'file',
                inputType: 'none',
                modify: false,
                description: 'file',
                value: value.name
            })
        }
        this.setState({files: files, items: newItems})
        console.log(inputFiles)
        var formdata = new FormData()
        formdata.append('file', inputFiles[0])
        console.log(formdata);
    }

    loadReport = () => {
        fetch(`${sessionStorage.getItem('address')}/api/v0/report/${this.props.reportID}/createreport`, {
            method: 'GET',
            headers: {
                'tehnarenok-token': sessionStorage.getItem('token')
            }
        }).then(data => {
            return data.blob()
        }).then(data => {
            console.log(data)
            let url = window.URL.createObjectURL(data)
            console.log(url)
            let a = document.createElement('a')
            a.href = url
            a.download = `${this.state.report.name}.pdf`
            a.click()
        })
    }

    // loadReport = () => {
    //     console.log(this.state.files)
    //     var formdata = new FormData()
    //     formdata.append('file', this.state.files[0])
    //     console.log(formdata.getAll('file'));
    //     fetch(`${sessionStorage.getItem('address')}/api/v1/report/${this.props.reportID}/createreport`, {
    //         method: 'POST',
    //         headers: {
    //             'tehnarenok-token': sessionStorage.getItem('token'),
    //         },
    //         body: formdata
    //     }).then(data => {
    //         return data.blob()
    //     }).then(data => {
    //         console.log(data)
    //         let url = window.URL.createObjectURL(data)
    //         console.log(url)
    //         let a = document.createElement('a')
    //         a.href = url
    //         a.download = `${this.state.report.name}.docx`
    //         a.click()
    //     })
    // }

    render() {
        console.log(this.state)

        var modal = (
            <ModalRoot activeModal={this.state.activeModal}>
                <ModalPage
                    id='addelement'
                    onClose={() => this.setState({activeModal: null})}
                    settlingHeight={90}
                    header={
                        <ModalPageHeader
                            right={<HeaderButton onClick={() => this.setState({activeModal: null})}>{platform() === IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
                        >
                            Элементы
                        </ModalPageHeader>
                    }
                > 
                    <List>
                        {this.state.report.structureFrontend && this.state.report.structureFrontend.indexOf('h1') >= 0 && <Cell 
                            key='1'
                            onClick={() => this.addNewElement('h1')}
                        >
                            Заголовок первого уровня
                        </Cell>}
                        {this.state.report.structureFrontend && this.state.report.structureFrontend.indexOf('h2') >= 0 && <Cell 
                            key='2'
                            onClick={() => this.addNewElement('h2')}
                        >
                            Заголовок второго уровня
                        </Cell>}
                        {this.state.report.structureFrontend && this.state.report.structureFrontend.indexOf('h3') >= 0&& <Cell 
                            key='3'
                            onClick={() => this.addNewElement('h3')}
                        >
                            Заголовок третьего уровня
                        </Cell>}
                        {this.state.report.structureFrontend && this.state.report.structureFrontend.indexOf('text') >= 0 && <Cell 
                            key='4'
                            onClick={() => this.addNewElement('text')}
                        >
                            Абзац
                        </Cell>}
                    </List>
                </ModalPage>
                <ModalCard
                    id='edit'
                    onClose={() => {
                        var {itemID, items, editItem} = this.state
                        items[itemID] = editItem
                        this.setState({activeModal: null, items: items})
                    }}
                    title='Изменение поля'
                >
                    {this.state.editItem && this.state.editItem.inputType === 'text' &&
                        <Textarea 
                            value={this.state.editItem.value}
                            onChange={(e) => {
                                var {editItem} = this.state
                                editItem.value = e.target.value 
                                this.setState({editItem: editItem})
                            }}
                        />
                    }
                    {this.state.editItem && this.state.editItem.inputType === 'string' &&
                        <Input
                            value={this.state.editItem.value}
                            onChange={(e) => {
                                console.log(e.target.value)
                                var {editItem} = this.state
                                editItem.value = e.target.value 
                                this.setState({editItem: editItem})
                            }}
                        />
                    }
                </ModalCard>
            </ModalRoot>
        )
        
        return(
            <View id={this.props.id} activePanel={this.state.activePanel} popout={this.state.popout} modal={modal}>
                <Panel id='main'>
                    <PanelHeader
                        left={<HeaderButton onClick={this.props.goTo}>
                            {platform() === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                            </HeaderButton>}
                    >
                        {this.state.report.name}
                    </PanelHeader>
                    <Group title='Описание'>
                        <p>
                            Для отчета необходимо загрузить файлы с кодом.
                        </p>
                        <p>
                            Текст в отчете можно добавить кликнув на значок +
                        </p>
                    </Group>
                    <Group title='Входные данные'>
                        <Button size='xl' onClick={this.addElement}>Добавить элемент</Button>
                        {this.state.report.structureFrontend && this.state.report.structureFrontend.indexOf('file_code') >= 0 &&
                            <Input type='file' multiple onChange={(e) => this.uploadFiles(e.target.files)}/>
                        }
                    </Group>
                    <Group title='Содержание отчета'>
                        <List>
                            <Cell key='-1'>Титульный лист</Cell>
                            {this.state.items && this.state.items.length > 0 && this.state.items.map((value, index) => {
                                return (
                                    <Cell 
                                        onDragFinish={({ from, to }) => {
                                            if(to === 0) {
                                                to = 1
                                            }
                                            from --
                                            to --
                                            if(isNaN(to) || isNaN(from)) {
                                                return
                                            }
                                            console.log(from, to)
                                            var {items} = this.state
                                            var item = items[from]
                                            items[from] = items[to]
                                            items[to] = item 
                                            this.setState({items: items})
                                        }}
                                        before={
                                            <Div>
                                                <Button disabled={!value.modify} style={{marginLeft: '5px'}} onClick={() => this.editElement(index)}>Edit</Button>
                                                <Button style={{marginLeft: '5px'}} onClick={() => {
                                                    var {items} = this.state 
                                                    console.log(index)
                                                    console.log(items)
                                                    items.splice(index, 1)
                                                    console.log(items)
                                                    this.setState({items: items})
                                                }}>Del</Button>
                                            </Div>
                                        } 
                                        draggable
                                        key={index}
                                        description={value && value.description ? value.description : null}
                                        
                                    >{value.value}</Cell>
                                )
                            })}
                        </List>
                    </Group>
                    <Button size='xl' onClick={this.loadReport}>
                        Скачать готовый отчет
                    </Button>
                </Panel>
            </View>
        )
    }
}

export default ReportDraggingList