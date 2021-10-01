import React, { useState, useCallback } from "react";

export default function PagesCalculadora() {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    const [result, setResult] = useState('');

    const onResultClick = useCallback(() => setResult(firstInput + secondInput), [
        setResult,
        firstInput,
        secondInput
    ]);

    const handleFirstInputChange = useCallback(
        (e) => {
            const value = Number(e.target.value);
            setFirstInput(value);
        },
        [setFirstInput]
    );

    const handleSecondInputChange = useCallback(
        (e) => {
            const value = Number(e.target.value);
            setSecondInput(value);
        },
        [setSecondInput]
    );
    
    return (
        <div>
            <div>
                <label> Valor 1 </label>
                <input
                    type="number"
                    value={firstInput}
                    onChange={handleFirstInputChange}
                />
            </div>
            <div>
                <label> Valor 2 </label>
                <input
                    type="number"
                    value={secondInput}
                    onChange={handleSecondInputChange}
                />
            </div>
            <div>
                <br />
                <button onClick={onResultClick}>Result</button>
            </div>
            <div>
                <br />
                <label>Resultado</label>
                <input value={result} readonly />
            </div>
        </div>
    );
}
