import { FaPlay } from "react-icons/fa";

const PlayComponent = () => {
  return (
    <>
        <div className="play-circle d-flex justify-content-center align-items-center flex-shrink-0" style={{color: "white"}}>
            <FaPlay size={21} className="ms-1"/>
        </div>
    </> 
  )
}

export default PlayComponent