import { useRef, useEffect, useState } from "react"
import sleep from "js/Utils/sleep"
import emojiRegex from "emoji-regex"

function TypeWriter(props) { 
    const [typedText, setTypedText] = useState('')
    const [cursor, setCursor] = useState(false)

    const elementRef = useRef(null);
    const [visibility, setVisibility] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [elementYOffset, setElementYOffset] = useState(null);


    async function asyncTypeLoop(duration) {
        if (props.text) {
            const emojiMatcher = emojiRegex();
            let emoji = false;

            for (let i = 0; i < props.text.length; i++) {
                await sleep(duration);
                if (emojiMatcher.test(props.text[i] + props.text[i + 1])) {
                    // If the item is an emoji, type it all at once
                    setTypedText(typedText => typedText + props.text[i] + props.text[i + 1]);
                    emoji = true;
                } else {
                    if (emoji) {
                        emoji = false;
                        continue;
                    }
                    // If the item is not an emoji, type it character by character
                    const characters = props.text[i].split('');
                    for (const char of characters) {
                        await sleep(duration);
                        setTypedText(typedText => typedText + char);
                    }
                }
            }
        } else {
            return setTypedText('You need to set a \'text\' value.');
        }
    }
    
    

    async function asyncCursorBlink(duration = 750) {
        while (props.cursor_blink) {
            setCursor(true);
            await sleep(duration);
            setCursor(false);
            await sleep(duration);
        }
        setCursor('');
    }

    async function asyncTypeWriter() {
        await sleep(props.delay);
        setCursor(true);
        setTypedText('')
        asyncTypeLoop(props.duration).then(() => {
            asyncCursorBlink();
        });
    }

    // Initialize the type writer.
    useEffect(() => {
        // If the scrollYThreshold is 0, start the type writer.
        if (props.scrollYThreshold === 0) {
            setVisibility(true);
            asyncTypeWriter();
        }

        // Scroll listener
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

    }, []);

    return (
        <div className={`${props.className} type-writer`} ref={elementRef}>
            <span className="text">{typedText}</span>
            <span className={`cursor ${cursor ? 'opaque-on' : 'opaque-off'}`}>|</span>
        </div>
    )
}



export default TypeWriter