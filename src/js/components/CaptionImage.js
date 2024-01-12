function CaptionImage(props) {
    return (
        <div className={`caption-image ${props.className}`} target="__">
            <a className="overlay" href={props.href}>
                <img className="image" src={props.src} alt={props.alt}/>
                <div className="caption">
                    {props.caption}
                </div>
            </a>
        </div>
    )
}

export default CaptionImage;