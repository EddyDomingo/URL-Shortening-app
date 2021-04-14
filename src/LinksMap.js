const LinksMap = ({genLinks, shortLink, inputArea, isPending, copySuccess, copyLink}) => {
    return ( 
        <div className="white-card">
            {isPending && <div className="loading-text">Loading...</div>}
            {shortLink && <input ref={inputArea} className="shorten-text input-div" value={shortLink}/>}
            <hr></hr> 
            <div>
            <button className="shorten-it" onClick={copyLink} >Copy</button> 
                    {copySuccess}
            </div>
        </div>
     );
}
 
export default LinksMap
;