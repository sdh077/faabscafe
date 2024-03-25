'use client'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export default function TinyEditor({ height = 500, setContent }: { height?: number, setContent: Dispatch<SetStateAction<string>> }) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  return (
    <div className="App">
      <Editor
        apiKey={'kudiltnf8y15o77xqowpy2fp0cuel4q66blzl4byrnzf5bgu'}
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={(content) => setContent(content)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height,
          menubar: false,
          plugins: [
            'table',
            'image',
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'file image undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
          a11y_advanced_options: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          images_upload_url: 'postAcceptor.php',
          images_upload_base_path: '/some/basepath',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </div>
  );
}

