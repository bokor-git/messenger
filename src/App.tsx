import React from 'react';
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
        <div  className="title"> <h1>Messenger</h1></div>
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
    return <div className="massage-list">
        <MassageItem/>
        <div className="massage-item">Lorem ipsum dolor sit amet</div>
        <MassageItem/>
        <div className="massage-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto</div>
        <MassageItem/>
        <MassageItem/>

        <div className="new-massage">
            <input type="text" placeholder="Enter your massage"/>
            
        </div>

    </div>
}

function MassageItem() {
    return <div className="massage-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto
        consectetur cupiditate
        ducimus et eum eveniet, id inventore ipsam mollitia, nobis, non nulla odio officiis quasi quia velit.
    </div>

}


export default App;
