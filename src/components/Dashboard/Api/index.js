/*import React, {useEffect} from 'react';

const ApiUrl = 'https://jsonplaceholder.typicode.com/users';


const Index = () => {

    useEffect(() =>{
        const fetchApi = async () => {
            const data = await fetch(ApiUrl);
            const response = await data.json();
        }
        fetchApi();
        },[]);
        console.log(users);
        
    return(
        <div>
            <h2>Api page</h2>
            {users.map((user) => {
              return (
              <h2>{user.id}</h2>
              )
             
            })}
        </div>
    )
};

export default Index;*/