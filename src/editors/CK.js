import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const config = {
    toolbar: {
        items: [
            'bold',
            'italic',
            '|',
            'bulletedList',
            'numberedList',
            'indent',
            'outdent',
            '|',
            'heading',
            '|',
            'undo',
            'redo'
        ]
    }
}

ClassicEditor.defaultConfig = config

class CK extends Component {
    
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data);
                    } }
                />
            </div>
        );
    }
}

export default CK;