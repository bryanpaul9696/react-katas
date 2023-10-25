import {ChangeEvent, useEffect, useState} from "react";




export const SimpleForm = () => {

    const [formState, setForm] = useState({name: "", surname : "", email: ""});

    const {name, surname
        , email} = formState;


    const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setForm({...formState, [name]: value});
    }


    useEffect(() => {
        console.log("Nuevo valor de name:" + name)
    }, [name]);

    useEffect(() => {
        console.log("Nuevo valor de surname" +
            " " + surname
        )
    }, [surname
    ])

    useEffect(() => {
        console.log("Nuevo valor de email " + email)
    }, [email])



    const clearForm =()=>{
        console.log(formState)
    }


    return (
        <>
            <h1>Formulario de registro</h1>

            <form >
                <input
                    className="form-control"
                    type="text"
                    value={name}
                    name="name"
                    onChange={onChangeData}
                />


                <input
                    className="form-control"
                    type="text"
                    value={surname
                }
                    name="surname
                    "
                    onChange={onChangeData}
                />

                <input
                    className="form-control"
                    type="text"
                    value={email}
                    name="email"
                    onChange={onChangeData}
                />


                <button onSubmit={clearForm}>
                   Clear

                </button>
            </form>
        </>
    );
}