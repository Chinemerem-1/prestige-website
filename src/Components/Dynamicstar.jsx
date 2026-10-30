import { WiStars } from "react-icons/wi";
import { useEffect, useState } from "react"

const Dynamicstar = ({starHeader, size}) => {

    const colors = ["#0098DA", "#A44730"]
    
    const [currentColorIndex, setCurrentColorIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
        }, 2000);

        return () => clearInterval(timer)
    }, [])

  return (
    <>
    <WiStars size={size} className={starHeader} style={{color: colors[currentColorIndex], transition: "color 0.6s ease-in-out"}}/>
    </>
  )
}

export default Dynamicstar