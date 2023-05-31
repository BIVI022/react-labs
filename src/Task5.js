import { useState } from 'react';

const Task5 = () => {
    return (
        <div>
            <h1>Задание 5</h1>
            <div>
                <UserFIO
                    firstName="Тест"
                    lastName="Тестович"
                    middleName="Тестовский"
                />
                <UserFIO
                    firstName="Иван"
                    lastName="Петрович"
                    middleName="Иванов"
                />
                <UserFIO
                    firstName="Никита"
                    lastName="Соболев"
                    middleName="Сергеевич"
                />
            </div>
        </div>
    );
};

const UserFIO = ({ firstName, lastName, middleName }) => {
    const [isBanned, setIsBanned] = useState(false);

    return (
        <tr>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{middleName}</td>
            <td>
                <div style={{ color: isBanned ? '#ff0000' : '#00ff00' }}>
                    {isBanned ? 'Забанен' : 'Не забанен'}
                </div>
            </td>
            <td>
                {!isBanned && (
                    <button onClick={() => setIsBanned(true)}>Забанить</button>
                )}
            </td>
        </tr>
    );
};

export default Task5;
