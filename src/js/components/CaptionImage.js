function CaptionImage(props) {
    return (
        <div className={`caption-image ${props.className}`} target="blank">
            <a className="overlay" href={props.href} target="__">
                <img className="image" src={props.src} alt={props.alt}/>
                <div className="caption">
                    {props.caption}
                </div>
            </a>
        </div>
    )
}

export default CaptionImage;