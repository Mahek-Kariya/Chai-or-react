import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setLength] = useState(8)
  const [numActive,setNumActive] = useState(false)
  const [charActive,setCharActive] = useState(false)
  const [password,setPassword] = useState('')

  //ref hook

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";

    if(numActive){
      str += "0123456789";
    }
    if(charActive){
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numActive, charActive, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordref.current?.select();
    //passwordref.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password); 
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numActive, charActive, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-2xl text-center font-bold mb-4 rounded-tl-lg'>Password Generator</h1>
        <div className='flex shadow rounded-lg pverflow-hidden mb-4'>
          <input type='text' className='outline-none w-full py-1 px-3 rounded-l-lg' placeholder='Password' readOnly value={password} ref={passwordref}/>
          <button className='bg-blue-500 text-white px-4 rounded-r-lg' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex justify-between'>
        <input type="range" min={6} max={25} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value)}}/>
        <span>Length : {length}</span>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2' id="numberInput" defaultChecked={numActive} onChange={() => setNumActive((prev) => !prev)}/>
            <span>Include Numbers</span>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2'
              id="characterInput" defaultChecked={charActive} onChange={() => setCharActive((prev) => !prev)}
            />
            <span>Include Special Characters</span>
          </label>
      </div>
      </div>
    </>
  );
  
}

export default App
