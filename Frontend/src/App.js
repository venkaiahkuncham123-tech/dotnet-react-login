import React,{useState} from 'react';
function App(){const[u,setU]=useState('');const[p,setP]=useState('');const[m,setM]=useState('');
const login=async()=>{const r=await fetch('http://localhost:5000/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:u,password:p})});setM(r.ok?'Login successful':'Invalid credentials');};
return <div style={{padding:40}}><h2>Login</h2><input placeholder='Username' onChange={e=>setU(e.target.value)}/><br/><input type='password' placeholder='Password' onChange={e=>setP(e.target.value)}/><br/><button onClick={login}>Login</button><p>{m}</p></div>}
export default App;