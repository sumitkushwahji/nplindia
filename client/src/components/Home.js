import React, { useEffect, useState } from "react";


function Home() {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        const userHomePage = async () => {
          try {
              const res = await fetch("/getdata", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const data = await res.json();
              setUserName(data.name);
              setShow(true);
            
          } catch (err) {
            console.log(err);
          }
        };
        userHomePage();
      }, []);
      
    return (
        <div >
            <p>welcome</p>
            <h1>{userName} </h1>
            <h1>{show ? 'we will look forword to you' : 'we are developers'}</h1>
        </div>
    )
}

export default Home
