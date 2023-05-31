import { useState } from 'react';

const Task2 = () => {
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

    const [id, setId] = useState('');
    const [propName, setPropName] = useState('');

    const changeNote = () => {
        console.log('ds');
        setNotes((state) => {
            return state.map((el) => {
                const elClone = { ...el };
                if (elClone.id === id) {
                    elClone[propName] = elClone[propName] + '!';
                }
                return elClone;
            });
        });
    };

    return (
        <div>
            <h1>Задание 2. Вариант 1</h1>
            <div>
                <input
                    value={id}
                    onChange={(e) => setId(e.currentTarget.value)}
                />
                <input
                    value={propName}
                    onChange={(e) => setPropName(e.currentTarget.value)}
                />
                <button onClick={changeNote}>Подтвердить</button>
                <div>
                    <p>Результат:</p>
                    {JSON.stringify(notes)}
                </div>
            </div>
        </div>
    );
};
export default Task2;
