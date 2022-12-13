import React, { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [fatherName, setFatherName] = useState("");

    const handlerName = (e) => {
        setName(e.target.value);
    };

    const handlerLastname = (e) => {
        setLastname(e.target.value);
    };

    const handlerFatherName = (e) => {
        setFatherName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let fullname = {
            name,
            lastname,
            fatherName,
        };
        console.log(fullname);
        setName("");
        setLastname("");
        setFatherName("");
    };

    return (
        <div>
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => handlerName(e)}
                />
                <label htmlFor="lastname">Фамилия:</label>
                <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => handlerLastname(e)}
                />
                <label htmlFor="fatherName">Отчество:</label>
                <input
                    type="text"
                    name="fatherName"
                    value={fatherName}
                    onChange={(e) => handlerFatherName(e)}
                />
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MyForm;
