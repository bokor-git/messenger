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
    return <div className="messenger">
        <div className="title"><h1>Messenger</h1></div>
        <Search/>
        <Dialogs/>
        <MassageList/>

    </div>

}

function Search() {
    return <div className="search"><input type="textarea" placeholder="Search"/></div>
}

function Dialogs() {
    return <div className="dialogs">
        <DialogItem/>
        <DialogItem/>
        <DialogItem/>
        <DialogItem/>
        <DialogItem/>
    </div>
}

function DialogItem() {
    return <div className="dialogs-item">
        <img className="user-photo" src="https://randomuser.me/api/portraits/men/71.jpg" alt=""/>
        <div className="user-name">User name</div>
    </div>

}

function MassageList() {

    let initState = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto",
        "consectetur cupiditate", "Lorem ipsum dolor sit amet",
        "Hello again"
    ]
    let [massage, setMassage] = useState<Array<string>>(initState)
    let [newMassage, setNewMassage] = useState<string>("")

    const addNewMassage = ()=> {
     setMassage([...massage, newMassage])
        setNewMassage("")
    }

    // @ts-ignore
    const onEnterPress = (e:KeyboardEvent<HTMLInputElement>) => {if (e.charCode === 13) {addNewMassage()}}
    return <div className="massage-list">
        {massage.map((m) => <MassageItem massage={m}/>)}


        <div className="new-massage">
            <input onChange={e => setNewMassage(e.currentTarget.value)} onKeyPress={onEnterPress} type="text" value={newMassage}
                   placeholder="Enter your massage"/>

        </div>

    </div>
}

type MassageItemPropsType = {
    massage: string
}

function MassageItem({massage}: MassageItemPropsType) {
    return <div className="massage-item">{massage} </div>

}


export default App;
