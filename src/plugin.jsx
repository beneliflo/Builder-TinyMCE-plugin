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
          height: 1000,
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
            'wordcount',
            'tinydrive',
            'editimage',
            'lists'
          ],
          tinydrive_token_provider: 'https://scale.com/api/jwt',
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter alignright alignjustify | codesample | ' +
            'link insertfile image media | table mergetags | ' +
            'checklist bullist numlist outdent indent | ' +
            'removeformat | code | help',
          editimage_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          image_title: true,
          image_caption: true,
          image_description: false,
          images_upload_credentials: true,
          automatic_uploads: true,
          file_picker_types: 'file image media'
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
