function CaptionImage(props) {
    return (
        <a className={`caption-image ${props.className}`} href={props.href} target="__">
            <div className="overlay">
                <img className="image" src={props.src} alt={props.alt}/>
                <div className="caption">
                    {props.caption}
                </div>
            </div>
        </a>
    )
}

export default CaptionImage;