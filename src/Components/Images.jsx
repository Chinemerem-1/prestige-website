const Images = ({src, imgHolder, imgStyles,className, alt}) => {
    return (
        <>
            <div className={imgHolder}>
                <img src={src} alt={alt} className={className} style={imgStyles}/>
            </div>  
        </>
    )
}

export default Images;