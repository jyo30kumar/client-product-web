import {useEffect, useRef} from 'react'

export const useHorizontalHook = ()=>{
    const scrollContainerRef = useRef(null);
      // horizontal scroll of collection section for large screens
  useEffect(()=>{

    const horizontalScroll = scrollContainerRef.current;

    const handleScroll = (e)=>{
      e.preventDefault();// Prevent default vertical scroll
      horizontalScroll.scrollLeft += e.deltaY; // Scroll horizontally
    }
    if (horizontalScroll) {
      horizontalScroll.addEventListener("wheel", handleScroll);
    }
    return () => {
      if (horizontalScroll) {
        horizontalScroll.removeEventListener("wheel", handleScroll);
      }
    };

  },[])
  return scrollContainerRef;
}

