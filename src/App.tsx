import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classnames from 'classnames'
// import './App.css'
import style from './App.module.scss'
import Home from './components/Home'
import Footer from './components/Footer'
import ParticlesBg from 'particles-bg'
function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={classnames(style.App, style.center)}>
            <Home />
            <ParticlesBg type='lines' bg={true} />

            <Footer />
            {/* <div>
                <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                    <img src='/vite.svg' className={style.logo} alt='Vite logo' />
                </a>
                <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
                    <img src={reactLogo} className={classnames(style.logo, style.react)} alt='React logo' />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={style.card}>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={style.readTheDocs}>Click on the Vite and React logos to learn more</p> */}
        </div>
    )
}

export default App
