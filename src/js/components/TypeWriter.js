import { useRef, useEffect, useState } from "react"
import sleep from "js/Utils/sleep"

function TypeWriter(props) {
    const [typedText, setTypedText] = useState('')
    const [cursor, setCursor] = useState('|')

    const elementRef = useRef(null);
    const [visibility, setVisibility] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [elementYOffset, setElementYOffset] = useState(null);

    async function asyncTypeLoop(duration) {
        const items = props.text.split('');
        for (let item of items) {
            await sleep(duration);
            setTypedText(typedText => typedText + item);
        }
    }

    async function asyncCursorBlink(duration = 750) {
        while (true) {
            setCursor('|');
            await sleep(duration);
            setCursor('');
            await sleep(duration);
        }
    }

    async function asyncTypeWriter() {
        await sleep(100);
        setTypedText('')
        asyncTypeLoop(props.duration).then(() => {
            asyncCursorBlink();
        });
    }

    // Create a scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Set the element's y offset and check if it's visible on the page, 
    // if it isn't, start the type writer.
    useEffect(() => {
        if (elementRef.current) {
            const yOffset = elementRef.current.getBoundingClientRect().top + window.scrollY;
            setElementYOffset(yOffset);
        }

        let threshold;
        if (props.scrollYThreshold === undefined) {
            threshold = elementYOffset + props.offset;
        } else {
            threshold = props.scrollYThreshold + props.offset;
        }

        if (!visibility && elementYOffset && scrollY >= threshold) {
            setVisibility(true);
            asyncTypeWriter();
        }
    }, [scrollY]);

    // If the scrollYThreshold is 0, start the type writer.
    useEffect(() => {
        if (props.scrollYThreshold === 0) {
            setVisibility(true);
            asyncTypeWriter();
        }
    }, []);

    return (
        <div className={`${props.className} type-writter`} ref={elementRef}>
            <span className="text">{typedText}</span>
            <span className="cursor">{cursor}</span>
        </div>
    )
}



export default TypeWriter