import React, { useEffect, useState } from "react";
import './add.css'
import arrow from './arrow-left-solid.svg'
function Add() {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [dis, setDis] = useState(false);
    let a =document.getElementsByClassName('addInput')
    const checkForm=()=>{
      
        for(var i=0;i<a.length;i++){
            if(a[i].length==0){
                setDis(false)
            }
            else if(a[i].length!=0){
                setDis(true)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sa");
        const data = {
            Name_Surname: name,
            Country: country,
            Email: email,
            City: city
        };

        fetch('http://localhost:3004/profiles', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/114f/2dbc/83c38b8db80e80df55e3960a47ecefd5?Expires=1646611200&Signature=e~Qu8-DWbodSEj-0sMmcltqKwoTh2iXucPTXuEcMX1Z05bhYYaKlbIvdT-pUoG4Oe0xFtyIf0OcfM6TF2jtKBgLPaZ-QyH-cNk1GGyPy0LoNLSdvDRYJxTIdV5~qoVQxRUUy~uWOB60RFBsgoWzGDGX9qj6~UaQrW5nEO8muAAIDt8m-mbPhdRE4ci1PRjh0ywa8otIx-Cwr-ORCxwBwPe1LsyzS9lek6GzUAPdN6CXKen1v3w74k7LZqi2M9nLk9ELxdlYI5MAARu84VMN7ahwWkJXoS8Sma~cGAlNURvk2f-mPEKgZPZdf0M8RHIRwn5VEd5UXq22-iySmNB0Hog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img" className="logo" />
            <img src={arrow} alt="" className="arrow" />
            <a href="/" className="returnLink">Return to List Page</a>
            <form onSubmit={handleSubmit} id="addForm" name="theform">
                <label htmlFor="" className="title">Name Surname</label>
                <input
                    type="text"
                    className="addInput"
                    value={name} placeholder='Enter name and Surname' required 
                    minlength="4" maxlength="60"
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="">Country</label>
                <input
                    type="text"
                    className="addInput"
                    value={country} placeholder='Enter a Country' required 
                    minlength="2" maxlength="40" 
                    onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor="">City</label>
                <input
                    type="text"
                    className="addInput"
                    value={city} placeholder='Enter a City' required 
                    minlength="2" maxlength="40" 
                    onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    className="addInput"
                    value={email} placeholder='Enter an Email(abc@xyz.com)' pattern="[^ @]*@[^ @]*" required 
                    onChange={(e) => {setEmail(e.target.value);
                    checkForm()}}
                />
                <button type="submit" className="addBtn" id="thebtn" disabled={dis} onClick={(e)=>{e.preventDefault();checkForm()}}>
                    <p id="">Search</p>
                </button>
            </form>
        </div>
    );
}

export default Add;
