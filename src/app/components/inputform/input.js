import React from "react";

function InputForm(props) {
    const { size = "medium", ...rest } = props;

    return (
        <div>
            <input className={`input ${size}`} {...rest} />
        </div>
    );
}

export default InputForm;
