import {Link }from "react-router-dom"
function Home(){
    const users = [
        {id:1 , name: "John", email: "john@.com"},
        {id:2 , name: "Joe", email: "joe@.com"}

    ];

  return(
    <>
    {
        users.map(user =>(
            <li key={user.id}> 
               <Link to={'/users/${user.id}'}>view profile{user.id}
               </Link>
            </li>
        )

        )
    }
    <h1>Hello</h1>
    <Link to="/About">
    
    About
    </Link>

    </>
  );
}
export default Home;