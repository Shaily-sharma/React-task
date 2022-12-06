import React, { useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Fifth= () => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");

    const [allEntry, setallEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();

        const newentry = {
            name: name,
            email: email
        }

        setallEntry([...allEntry, newentry])

    }
    console.log(allEntry);

    
        return (
            <>
                

                 
                <form action=" " onSubmit={submitForm}>
                    <div>
                    <label htmlFor='name'> name:</label>
                        <input
                            type="text"
                            value={name}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                    <label htmlFor='email'> email:</label>
                        <input
                            type="text"
                            value={email}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                   <button type='submit'>Submit</button>
                   </form>
                   <div>
                    {
                    allEntry.map((element) => {
                        return(
                <div>
                
                    <table>
                    

                        <tr>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.email}</td>

                        </tr>

                    </table>
                </div>
            
        )
    })
    
}
</div>
</>
        )
}
export default Fifth;
