import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

export default function Jodit() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    const handleChange = newContent => {
        setContent(newContent)
        console.log(newContent);
        
    }
	
	return (
        <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                
                onChange={newContent => handleChange(newContent)}
            />
        );
}