import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch ('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({email, password})
         });

         const data = await res.json();
         console.log(data);
            
    }


  return (
    <section>
      <form onSubmit={handlerSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
