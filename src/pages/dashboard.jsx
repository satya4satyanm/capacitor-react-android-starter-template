import React, { useEffect, useState } from "react"
import App from "../components/App";
import '../styles.scss';


export function Dashboard() {

    const [selectedgroup, setSelectedGroup] = useState(null);
    const [listName, setListName] = useState('');
    const [privacy, setPrivacy] = useState(false);

    const [lsLists, setLSLists] = useState(
        JSON.parse(localStorage.getItem("lsLists")) || []
    );

    useEffect(() => {
        localStorage.setItem("lsLists", JSON.stringify(lsLists));
    }, [lsLists]);


    const createList = () => {
        const names = lsLists.map(itm => itm.name);
        if (names.indexOf(listName) < 0 && listName.length)
            setLSLists([...lsLists, { name: listName, items: [], id: new Date().toISOString() }].reverse()) //.reverse()
            setListName('')
    }

    const loadList = (e) => {
        // console.log(e.target.dataset.value)
        setSelectedGroup(lsLists.filter(prop => prop.name === e.target.dataset.value && prop.id === e.target.dataset.id)[0]);
    }

    const onRemove = (data) => {
        // console.log(data.value, data.id)
        const tempArr = lsLists.filter(prop => prop.name !== data.value && prop.id !== data.id);
        setLSLists(tempArr);
    }

    const updateGrpWithListItems = (grp, list) => {
        const clone = [...lsLists];
        const grpToUpdate = clone.filter(grpitem => grpitem.name===grp.name && grpitem.id===grp.id);
        grpToUpdate[0].items = list;
        setLSLists(clone);
    }

    return (<div className="pages">
        <h2>Quick Shopping</h2>
        <input type="text" value={listName} onChange={(e) => { setListName(e.target.value) }} placeholder="Shopping Name" />
        <button onClick={createList}>Create Shopping</button>

        <div className="list-c">
            {lsLists.map((list, index) => {
                return (<div key={index} className="list-names"><span onClick={loadList} data-value={list.name} data-id={list.id}>{list.name} ({list.items.length})</span>
                    <img
                        className="remove"
                        align="right"
                        src="remove.png"
                        width="20"
                        alt="remove"
                        data-value={list.name}
                        data-id={list.id}
                        onClick={(e) => {
                            onRemove(e.target.dataset);
                        }}
                    />
                </div>)
            })}
        </div>

        {
            selectedgroup && <div className="popup bg"></div>
        }

        {
            selectedgroup && <div className="popup"><App close={() => setSelectedGroup(null)} grp={selectedgroup} updateGrpWithListItems={updateGrpWithListItems}></App></div>
        }

        <div className="footer" onClick={()=>{setPrivacy(true)}}>Privacy Policy & Help</div>
        {
            privacy && (<div className="popup"><div className="privacy"><h2>Privacy Policy</h2>
                This app does not use any of your information in any manner.<br/><br/>
                This is a daily essential application to keep track of any todo items.<br/><br/>
                It can be used for shopping and any other purposes.<br/><br/>
                <h2>App Usage</h2>
                <p> Create shopping list groups and add list items by clicking on them<br/><br/>
                    Share a list by copying, Or paste comma separated items in the list input to add individual items to list.
                </p>
                

                <button onClick={()=>{setPrivacy(false)}}>
                    <span>Close</span>
                </button>
                </div>
            </div>)
        }
    </div>);
}