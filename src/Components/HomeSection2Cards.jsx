import Images from "./Images"

const HomeSection2Cards = ({src, texth2, textp}) => {

  return (
    <div className="card-holder">
        <Images src={src} className="img-fluid card-image"/>
        <div className="card-body">
            <div className="card-body1"> 
                <h2 >{texth2}</h2>
                <p>{textp}</p>
            </div>
        </div>
        <div className="card-line"/>
    </div>
  )
}

export default HomeSection2Cards  