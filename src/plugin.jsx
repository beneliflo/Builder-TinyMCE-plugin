/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
// contents of plugin.jsx
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/react';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const example_image_upload_handler = (blobInfo, progress) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.open('POST', 'postAcceptor.php');

  xhr.upload.onprogress = (e) => {
    progress(e.loaded / e.total * 100);
  };

  xhr.onload = () => {
    if (xhr.status === 403) {
      reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
      return;
    }

    if (xhr.status < 200 || xhr.status >= 300) {
      reject('HTTP Error: ' + xhr.status);
      return;
    }

    const json = JSON.parse(xhr.responseText);

    if (!json || typeof json.location != 'string') {
      reject('Invalid JSON: ' + xhr.responseText);
      return;
    }

    resolve(json.location);
  };

  xhr.onerror = () => {
    reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
  };

  const formData = new FormData();
  formData.append('file', blobInfo.blob(), blobInfo.filename());

  xhr.send(formData);
});

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
            'wordcount',
            'tinydrive',
            'editimage',
            'lists'
          ],
          tinydrive_token_provider: '0lbhu31lrngl0y5eo8e6p0jckqgeikc94mnkaig43yuahupv',
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
          /* enable automatic uploads of images represented by blob or data URIs*/
          automatic_uploads: true,
          /*
            URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
            images_upload_url: 'postAcceptor.php',
            here we add custom filepicker only to Image dialog
          */
          file_picker_types: 'file image media',
          images_upload_handler: example_image_upload_handler
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
