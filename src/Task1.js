import { useState } from 'react';

const Task1 = () => {
    const [arr, setArr] = useState(['a', 'b', 'c', 'd', 'e']);

    return (
        <div>
            <h1>Задание 1. Вариант 1</h1>
            <ol>
                {arr.map((el) => (
                    <li style={{ display: 'flex' }} key={el}>
                        <p>{el}</p>
                        <button
                            onClick={() =>
                                setArr((state) =>
                                    state.filter((stateEl) => stateEl !== el)
                                )
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};
export default Task1;
