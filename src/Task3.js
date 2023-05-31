import { useState } from 'react';

const Task3 = () => {
    const [notes, setNotes] = useState([
        {
            id: 'GYi9G_uC4gBF1e2SixDvu',
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13',
        },
        {
            id: 'IWSpfBPSV3SXgRF87uO74',
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23',
        },
        {
            id: 'JAmjRlfQT8rLTm5tG2m1L',
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33',
        },
    ]);
    return (
        <div>
            <h1>Задание 3. Вариант 1</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>prop1</th>
                        <th>prop2</th>
                        <th>prop3</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr key={note.id}>
                            <td>{note.id}</td>
                            <td>{note.prop1}</td>
                            <td>{note.prop2}</td>
                            <td>{note.prop3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddNewNote setNotes={setNotes} />
        </div>
    );
};

const AddNewNote = ({ setNotes }) => {
    const [id, setId] = useState('');
    const [prop1, setProp1] = useState('');
    const [prop2, setProp2] = useState('');
    const [prop3, setProp3] = useState('');

    return (
        <div>
            <input value={id} onChange={(e) => setId(e.currentTarget.value)} />
            <input
                value={prop1}
                onChange={(e) => setProp1(e.currentTarget.value)}
            />
            <input
                value={prop2}
                onChange={(e) => setProp2(e.currentTarget.value)}
            />
            <input
                value={prop3}
                onChange={(e) => setProp3(e.currentTarget.value)}
            />
            <button
                onClick={() => {
                    setNotes((state) => [
                        ...state,
                        {
                            id,
                            prop1,
                            prop2,
                            prop3,
                        },
                    ]);
                    setId('');
                    setProp1('');
                    setProp2('');
                    setProp3('');
                }}
            >
                Добавить
            </button>
        </div>
    );
};

export default Task3;
