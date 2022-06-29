import { useRef, useState, useEffect } from "react"
import React from 'react'

const Register = () => {

    const USER_REGEX =/^[a-zA-Z][a-zA-Z0-9-_]{3,23$/;
    const PWD_REGEX  =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,4$}/;

    const userRef =useRef();
    const errRef =useRef();

    const [user, setUser]=useState('');
    const [validName, setValidName]=useState('false');
    const [userFocus, setUserFocus]=useState('false');


    const [pwd, setPwd]=useState('');
    const [validMatch, setValidMatch]=useState('false');
    const [pwdFocus, setPwdFocus]=useState('false');

    const [matchPwd, setMatchPwd]=useState('');
    const [validPwd, setValidPwd]=useState('false');
    const [matchFocus, setMatchFocus]=useState('false');

    const [errMsg, setErrMsg]=useState('');
    const [success, setSuccess]=useState('false');

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
      const result =USER_REGEX.text(user);
      console.log(result);
      console.log(user);
      setValidName(result);
    },[user])

    useEffect(()=>{
        const result =PWD_REGEX.text(pwd);
        console.log(result);
        console.log(pwd);
        setValidName(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
      },[pwd, matchPwd])

      useEffect(()=>{
        setErrMsg('');
      },[user, pwd, matchPwd])

  return (
    <section>
        <p ref={errRef} className={errMsg  ? "errmsg": 
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form>
                <label htmlFor="username">Username:
                    <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={facheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions": "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowd.
                    </p>
        </form>
    </section>
  )
}
export default Register;
