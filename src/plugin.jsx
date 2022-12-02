/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
// contents of plugin.jsx
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/react';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TinyEditor(props) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="0lbhu31lrngl0y5eo8e6p0jckqgeikc94mnkaig43yuahupv"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={props.value}
        onEditorChange={props.onChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'codesample',
            'help',
            'wordcount'
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter alignright alignjustify | codesample | ' +
            'link image media | table mergetags | ' +
            'checklist bullist numlist outdent indent | ' +
            'removeformat | code | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button type="button" onClick={log}>
        Log editor content
      </button>
    </>
  );
}

Builder.registerEditor({
  name: 'TinyTextEditor',
  component: TinyEditor
});
