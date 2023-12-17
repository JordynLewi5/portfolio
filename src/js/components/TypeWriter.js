import { useEffect, useState } from "react"
import sleep from "js/Utils/sleep"

function TypeWriter(props) {
    async function asyncTypeLoop(duration) {
        const items = props.text.split('');
        for (let item of items) {
            await sleep(duration);
            setTypedText(typedText => typedText + item);
        }
    }

    async function asyncCursorBlink(duration = 500) {
        while (true) {
            setCursor('|');
            await sleep(duration);
            setCursor('');
            await sleep(duration);
        }
    }

    async function asyncTypeWriter() {
        await sleep(500);
        setTypedText('')
        asyncTypeLoop(props.duration).then(() => {
            asyncCursorBlink();
        });
    }

    const [typedText, setTypedText] = useState('')
    const [cursor, setCursor] = useState('|')

    const [visibility, setVisibility] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
    });

    useEffect(() => {
        if (!visibility && scrollY >= props.scrollYThreshold) {
            setVisibility(true);
            asyncTypeWriter();
        }
    }, [scrollY, props.text, props.duration])

    return (
        <div className={`${props.className} type-writter`}>
            <span className="text">{typedText}</span>
            <span className="cursor">{cursor}</span>
        </div>
    )
}

export default TypeWriter