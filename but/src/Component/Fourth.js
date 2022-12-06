import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fourth(){

const data= 
    [
      {name: 'test1',
       email: 'test1@test.com'},

      {name: 'test2', 
      email: 'test2@test.com'},

      {name: 'test3', 
      email: 'test3@test.com'},

      {name: 'test4', 
      email: 'test4@test.com'},

      {name: 'test5', 
      email: 'test5@test.com'}
    ]

const rows=data.map((element)=>{
		   
       return(
			<tr>
			<td>{element.name}</td>
			<td>{element.email}</td>
			</tr>
			)
   }
)
        return(
	       <div>
		
		<Table hover>
			<thead>
			<tr>	
				<th> name</th>
				<th>email</th>
			</tr>
			</thead>

		<tbody>

			{rows}
			             </tbody>

		</Table>	
			
	     </div>
    )
}
export default Fourth;



