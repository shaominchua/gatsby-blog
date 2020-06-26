import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
// import ClassicEditor from '@akilli/ckeditor4-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor4-full';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import styled from 'styled-components';


const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    } 
  }
`;
// CKEditor.replace('app',{
//   extraPlugins: 'iframe'
// })

// const Editor = ({ onChange, name, value }) => {
//   return (
//     <Wrapper>
//       <CKEditor
//         editor={ClassicEditor}
//         data={value}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           onChange({ target: { name, value: data } });
//         }}

//         // config={{
//         //             // toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'imageUpload', 'insertTable',
//         //             // 'tableColumn', 'tableRow', 'mergeTableCells', 'mediaEmbed', '|', 'undo', 'redo']
//         //             extraPlugins: ['colorbutton'],
//         //             // fullPage: true,
                   
//         //             // allowedContent: true
//         //  }}
//       />
//     </Wrapper>
//   );
// };

// Editor.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        
        data={value}
        
        // editor={CKEDITOR.replace(CKEDITOR.instances.editor1)}
        // plugins={{
        //    addExternal: ['youtube', '../CKeditor/plugins/youtube/', 'plugin.js']
        // }
        
        config={{
          // plugins:[
            // 'iframe', 
          // ],
          customConfig:['../full/ckeditor.js'],

          plugins:[
            external= ('youtube', '../CKeditor/plugins/youtube/', 'plugin.js'),
          ],
          
          extraPlugins: ['richcombo', 'font','dialog','templates','widget','dialog','docprops','colorbutton', 'justify', 'sourcedialog'],
          removePlugins : ['sourcearea'],
          // imageUploadUrl:'../imageUpload/',
          // toolbar : [
          //   [ '-', 'Bold', 'Italic','Youtube' ]
          // ],
          // //language : 'zh' - correct chinese language
          fullPage: true,
          allowedContent:true,
          // extraAllowedContent: 'script link br img'
         
        }}

        onChange={(event) => {
          // console.log(CKEDITOR.htmlDataProcessor.toHtml())
          // console.log("NAME" + name + "AND VALUE" + value)
          //console.log(CKEDITOR.currentInstance )

          console.log(CKEDITOR.plugins.getPath( 'youtube' ))
          var editor=CKEDITOR.currentInstance;
          const data = editor.getData()
          console.log(data)
          
          onChange({ target: { name, value: data } });
        }}

        
     

        // onBlur={ ( event, editor ) => {
        //     console.log( 'Blur.', editor );
        // } }
        // onFocus={ ( event, editor ) => {
        //     console.log( 'Focus.', editor );
        // } }

      
      />


    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;