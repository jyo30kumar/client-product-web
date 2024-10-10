import {useEffect} from 'react'

const useViewportHeight = () => {
      // set height dynamically to window according to different screen 
  useEffect(()=>{
    const setVh = () =>{
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh',`${vh}px`)
    }
    setVh();
    window.addEventListener('resize',setVh);
    return()=>{
      window.removeEventListener('resize',setVh);
    }
  },[]);
}
export default useViewportHeight
