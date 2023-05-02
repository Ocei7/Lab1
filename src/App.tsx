import React, { useState, useEffect } from 'react';
import { useStore } from './MyStore';

function MyApp3() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ name: '', prenume: '', mail: '' });
    const myData = store.myData;


    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localData.name || !localData.prenume || !localData.mail) {
            alert('Introduceti datele');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            store.addObject(localData);
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
        }, 2000);

    };


    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ name: '', prenume: '', mail: '' });
        localStorage.setItem('myData', JSON.stringify(store.myData));
    };



    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('myData');
        if (data) {
            store.setMyData(JSON.parse(data));
        } else {
            localStorage.setItem('myData', JSON.stringify(store.myData));
        }
    }, [store]);

    useEffect(() => {
        if (!isLoading) {
            const data = localStorage.getItem('myData');
            if (data) {
                store.setMyData(JSON.parse(data));
            }
        }
    }, [isLoading, store]);

    return (

        <div className="container">

            <form className="form" onSubmit={handleAddObject}>
                <input
                    className="input"  type="text" placeholder="Nume" defaultValue={localData.name} onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
                />
                <input
                    className="input" type="text" placeholder="Prenume" defaultValue={localData.prenume} onChange={(e) => setLocalData({ ...localData, prenume: e.target.value })}
                />
                <input
                    className="input" type="text" placeholder="Mail" defaultValue={localData.mail} onChange={(e) => setLocalData({ ...localData, mail: e.target.value })}
                />
                <button className="button" type="submit">{isLoading ? 'Se incarca...' : 'Adauga'}</button>

            </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Mail</th>
                    <th>Modificari</th>
                </tr>
                </thead>
                <tbody>
                {myData.map((item: any, index: number) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.prenume}</td>
                        <td>{item.mail}</td>
                        <td>
                            <button className="button delete" onClick={() => handleDeleteObject(index)}>
                                Sterge
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyApp3;