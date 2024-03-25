'use client'
import { EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
    ssr: false,
})

export default function DraftEditor() {
    
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState)
    }
    return (
        <>
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                localization={{
                    locale: 'ko',
                  }}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    image: {
                        className: undefined,
                        component: undefined,
                        popupClassName: undefined,
                        urlEnabled: true,
                        uploadEnabled: true,
                        alignmentEnabled: true,
                        uploadCallback: undefined,
                        previewImage: false,
                        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                        alt: { present: false, mandatory: false },
                        defaultSize: {
                            height: 'auto',
                            width: 'auto',
                        },
                    },
                    history: { inDropdown: true },
                }}
            />
        </>
    )
}
