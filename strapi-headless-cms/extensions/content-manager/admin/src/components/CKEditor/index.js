import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
// import CKEditor from 'ckeditor-full';
// import CKEditor from 'ckeditor'
// import ClassicEditor from '@akilli/ckeditor4-build-classic';
// // import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor4-full';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';


// import '../CKEditor/src/ckeditor/ckeditor'

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    } 
  }
`;


const Editor = ({ onChange, name, value }) => {

  return (
    // window.CKEDITOR_BASEPATH = '/node_modules/ckeditor4-full/'


    // CKEDITOR.replace( 'app', {
    //     extraPlugins: ['iframe','youtube']
    // } )

    // window.CKEDITOR_BASEPATH = '/node_modules/ckeditor4/'

    // <div>Helloooooo</div>
    <Wrapper>

  
      <CKEditor

        // plugins={{
        //     addExternal: ('ckeditor_wiris', 'https://www.wiris.net/demo/plugins/ckeditor/', 'plugin.js')
        // }}

        data={value}



        // editor={CKEDITOR.replace(CKEDITOR.instances.editor1)}


        dialog={{
          filebrowser: 'tab1:txtUrl'
        }}

        // replace={{'editor1':{,
        //   extraPlugins: 'youtube'}}}

        scriptLoader={{
          load: (['/https://code.jquery.com/jquery-3.2.1.slim.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', '/https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'])
        }}

        config={{

          //   basePath :'/node_modules/ckeditor4-react/',

          //replace:[CKEDITOR.currentInstance],
          // external:('youtube', '../plugins/youtube/plugin.js'),
          // customConfig:['/config.js'],
          extraPlugins: ['richcombo', 'font', 'dialog', 'templates', 'widget', 'dialog', 'docprops', 'colorbutton', 'justify', 'sourcedialog', 'autocomplete', 'textmatch', 'ajax', 'panelbutton', 'floatpanel', 'div','iframe'],
          removePlugins: ['sourcearea'],
          font_names :"Arial/Arial; Helvetica; sans-serif;Times New Roman/Times New Roman; serif;Verdana;Source Sans Pro",
          font_defaultLabel : 'Source Sans Pro',
          fontSize_defaultLabel : '20px',
  
          // imageUploadUrl:'../imageUpload/',
          // toolbar : [
          //   [ '-', 'Bold', 'Italic','Youtube' ]
          // ],
          // //language : 'zh' - correct chinese language
          // fullPage: true,
          allowedContent: true,
          // extraAllowedContent: 'script link br img'
          // filebrowserBrowseUrl :'javascript:void(0)' //enable browser options- but need to set the path
        }}

        onInit={(event) => {
          // You can store the "editor" and use when it is needed.  
          console.log('Editor is ready to use!');
        }}

        onChange={(event) => {
          // console.log(CKEDITOR.htmlDataProcessor.toHtml())
          // console.log("NAME" + name + "AND VALUE" + value)
          //console.log(CKEDITOR.currentInstance )
          //console.log(CKEDITOR.basePath)
          console.log(CKEDITOR.plugins.getFilePath('youtube'))
          console.log(CKEDITOR.plugins.getPath('templates'))
          var editor = CKEDITOR.currentInstance;
          const data = editor.getData()
          console.log(data)

          onChange({ target: { name, value: data } });

        }}


        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}


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

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import CKEditor from 'ckeditor4-react';
// import { Helmet } from 'react-helmet';
// import ReactHtmlParser from "react-html-parser"
// import ReactDOM from 'react-dom'
// class TwoWayBinding extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: '<p>React is really <em>nice</em>!</p>'
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.onEditorChange = this.onEditorChange.bind(this);
//     }

//     onEditorChange(evt) {
//         this.setState({
//             data: evt.editor.getData()

//         });

//         console.log(CKEDITOR.basePath)
//     }

//     handleChange(changeEvent) {
//         this.setState({
//             data: changeEvent.target.value
//         });
//     }

//     // componentDidMount() {
//     //     const script = document.createElement("script");
//     //     script.async = true;
//     //     script.src = "../ckeditor-full/ckeditor.js";
//     //     this.div.appendChild(script);
//     // }

//     // componentDidMount() {
//     //     const script = document.createElement("script");
//     //     script.innerHTML = "CKEDITOR.replace('content')"
//     //     //script.async = true;
//     //     document.body.append(script);
//     // }



//     render() {

//         const scriptTag = '<script src="https://cdn.ckeditor.com/4.14.1/standard-all/ckeditor.js"></script>';
//         const scriptTag2 = "<script>CKEDITOR.replace('content')</script>"

//         return (
//             <React.Fragment>

//                 <div className="container" ref={el => (this.div = el)}>

//                     <Helmet>
//                         <script src="https://cdn.ckeditor.com/4.5.6/standard/ckeditor.js"></script>
//                     </Helmet>
//                     <div>
//                         <h1>Hello react</h1>
//                         <textarea name="content" id="content"></textarea>
//                     </div>
//                     {/* <div dangerouslySetInnerHTML={{ __html: "<script>CKEDITOR.replace('content')</script>" }}></div> */}
//                 </div>
//                 <script src="https://cdn.ckeditor.com/4.5.6/standard/ckeditor.js"></script>
//                 <script>
//                     CKEDITOR.replace('content')
//                  </script>
//             </React.Fragment>

//             // <div className="App" ref={el => (this.div = el)}>
//             //    
//             //     {/* Script is inserted here */}
//             // </div>
//             // <div>

//             //     <CKEditor
//             //         data={this.state.data}
//             //         onChange={this.onEditorChange} />
//             //         <label>
//             //             Change value:
//             //             <textarea defaultValue={this.state.data} onChange={this.handleChange} />
//             //         </label>
//             //         <EditorPreview data={this.state.data} />
//             // </div>
//         );
//     }
// }

// class EditorPreview extends Component {
//     render() {
//         return (
//             <div className="editor-preview">
//                 <h2>Rendered content</h2>
//                 <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
//             </div>
//         );
//     }
// }

// EditorPreview.defaultProps = {
//     data: ''
// };

// EditorPreview.propTypes = {
//     data: PropTypes.string
// };

// export default TwoWayBinding;