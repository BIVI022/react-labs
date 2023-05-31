import { useState } from 'react';

const paragraphs = [
    'Hello, World!',
    'Paragraph 2',
    'Paragraph 3',
    'Paragraph 4',
    'Paragraph 5',
];

const Task4 = () => {
    const [hiddenParagraphInputValue, setHiddenParagraphInputValue] =
        useState(null);
    const [hiddenParagraph, setHiddenParagraph] = useState(null);

    return (
        <div>
            <h1>Задание 4. Вариант 1</h1>
            <div>
                {paragraphs
                    .filter((el, index) => index !== hiddenParagraph)
                    .map((p) => (
                        <p key={p}>{p}</p>
                    ))}
            </div>
            <div>
                <input
                    value={hiddenParagraphInputValue}
                    onChange={(e) =>
                        setHiddenParagraphInputValue(e.currentTarget.value)
                    }
                />
                <button
                    onClick={() =>
                        setHiddenParagraph(
                            Number(hiddenParagraphInputValue) - 1
                        )
                    }
                >
                    Подтвердить
                </button>
            </div>
        </div>
    );
};
export default Task4;
