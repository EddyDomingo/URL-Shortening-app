import { useCallback, useEffect, useRef, useState } from "react";
import LinksMap from "./LinksMap";

const Shorten = () => {
    const [shortLink, setShortLink] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [input, setInput] = useState(null);
    const [copySuccess, setCopySuccess] = useState('');
    const inputArea = useRef(null);
    const [genLinks, setGenLinks] = useState([]);

    const timeOutID = ()=>{ setTimeout(setCopySuccess('Copied'), 3000);}
    
    function copyLink(e){
        inputArea.current.select();
        document.execCommand('copy');
        e.target.focus();
        // setCopySuccess('Copied!');
        clearTimeout(timeOutID());
        setGenLinks(genLinks => [...genLinks, shortLink]);
        console.log(genLinks);
        console.log(shortLink);
        
    };

    const handleClick = () =>{
        setGenLinks(genLinks => [...genLinks, shortLink]);
        console.log(genLinks);
        console.log(shortLink);
    }
 

    const shortenUrl = useCallback(() => {
        setIsPending(true);
        const url = "https://api.shrtco.de/v2/shorten?url=";
        const fullUrl = url + input;
        fetch(fullUrl)
        .then(res => res.json())
            .then(data => {
                setShortLink(data.result.short_link)
            })
            .finally(() => setIsPending(false));
    }, [input]);
    // value={input}
   
    return (
        <main>
            <section className="purple-card">
                <input  onInput={e => setInput(e.target.value)} type="text" placeholder="Shorten a link here..." className="shorten-input"/>
                <button className="shorten-it" onClick={shortenUrl}>Shorten It!</button> 
            </section>
            <section className="white-card">
                {isPending && <div className="loading-text">Loading...</div>}
                {shortLink && <input ref={inputArea} className="shorten-text input-div" value={shortLink}/>}
                <hr></hr>
                <div>
                    <button className="shorten-it" onClick={copyLink} >Copy</button> 
                    {copySuccess}
                </div>
            </section>
            {/* <LinksMap genLinks={genLinks} shortLink={shortLink} inputArea={inputArea} isPending={isPending} copySuccess={copySuccess} copyLink={copyLink}/> */}
        </main>
     );
}
 
export default Shorten;