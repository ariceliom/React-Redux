import { useState } from 'react'; 
import styles from './login.module.css'

import { Link } from 'react-router-dom'

export function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleLogin(e){
    e.preventDefault()
    
    console.log(name, email)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Link to="/painel">
            <h1 className={styles.title}>Moura Dev</h1>
          </Link>

          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="text" 
              className={styles.input}
              value={name}
              onChange={ event => setName(event.target.value)}
              placeholder='Seu Nome'
            />
            <input 
              type="text" 
              className={styles.input}
              value={email}
              onChange={ event => setEmail(event.target.value)}
              placeholder='Seu email'
            />

            <button type="submit">Entrar</button>
          </form>
      </main>
    </div>
  )
}
