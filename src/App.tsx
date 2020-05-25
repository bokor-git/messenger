import React, {useState} from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Messenger/>
        </div>
    );
}


function Messenger() {
    type DialogsType = { id: number, name: string }
    let [dialogs, setDialogs] = useState<Array<DialogsType>>([
        {id: 1, name: "Boris Jonson"},
        {id: 2, name: "Alex Brother"},
        {id: 3, name: "Peter Pen"},
        {id: 4, name: "Mr. Been"},
        {id: 5, name: "Alex Alexandrov"}
    ])

    const filterDialog = (chart:string)=>{

       let filteredDialogs =  dialogs.filter(d => d.name.toLowerCase().includes(chart))
        setDialogs([...filteredDialogs])
        if (chart.length===0){
            setDialogs([
                {id: 1, name: "Boris Jonson"},
                {id: 2, name: "Alex Brother"},
                {id: 3, name: "Peter Pen"},
                {id: 4, name: "Mr. Been"},
                {id: 5, name: "Alex Alexandrov"}
            ])
        }

    }

    return <div className="messenger">
        <div className="title"><h1>Messenger</h1></div>
        <Search filterDialog = {filterDialog}/>
        <Dialogs dialogs={dialogs}/>
        <MassageList/>

    </div>

}

type SearchPropsType= {
    filterDialog: (chart:string)=>void
}


function Search({filterDialog}:SearchPropsType) {

    return <div className="search"><input type="textarea" placeholder="Search" onChange={(e)=>filterDialog(e.currentTarget.value)}/></div>
}

type DialogsPropsType = {
    dialogs:Array<{ id: number, name: string }>
}

function Dialogs({dialogs}:DialogsPropsType) {

    return <div className="dialogs">
        {dialogs.map(d => <DialogItem key={d.id} dialog={d}/>)}

    </div>
}

type DialogItemPropsType = {
    dialog: { id: number, name: string }
}

function DialogItem({dialog}: DialogItemPropsType) {
    return <div className="dialogs-item">
        <img className="user-photo" src="https://randomuser.me/api/portraits/men/71.jpg" alt=""/>
        <div className="user-name">{dialog.name}</div>
    </div>

}

function MassageList() {

    let initState = [{
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto",
        date: "12.06.2020"
    },
        {title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto", date: "12.06.2020"},
        {title: "consectetur cupiditate", date: "12.06.2020"},
        {title: "Lorem ipsum dolor sit amet", date: "12.06.2020"},
        {title: "Hello again", date: "12.06.2020"}
    ]

    type MassageType = { title: string, date: string }
    let [massage, setMassage] = useState<Array<MassageType>>(initState)
    let [newMassage, setNewMassage] = useState<string>("")

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let date = dd + '.' + mm + '.' + yyyy;


    const addNewMassage = () => {
        let newMessage = {title: newMassage, date: date}
        const newMassages = [...massage, newMessage]

        setMassage(newMassages)
        setNewMassage("")
    }

    const onEnterPress = (e: any) => {
        if (e.charCode === 13) {
            addNewMassage()
        }
    }
    return <div className="massage-list">
        {massage.map((m) => <MassageItem massage={m}/>)}


        <div className="new-massage">
            <input onChange={e => setNewMassage(e.currentTarget.value)} onKeyPress={onEnterPress} type="text"
                   value={newMassage}
                   placeholder="Enter your massage"/>

        </div>

    </div>
}

type MassageItemPropsType = {
    massage: { title: string, date: string }
}

function MassageItem({massage}: MassageItemPropsType) {
    return (<div className="massage-container">
        <div className="massage-date">{massage.date}</div>
        <div className="massage-item">{massage.title}</div>
    </div>)


}


export default App;
