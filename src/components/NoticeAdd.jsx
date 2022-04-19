import React, { useState } from "react";
import sr from "../Service/Apiservice";
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertToRaw } from 'draft-js';
import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import styled from 'styled-components';


const NoticeAdd = () => {
  const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

  const [file, setFile] = useState({file: [],});
  const [datalist, setDatalist] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleChange(event) {
    const filesInArr = Array.from(event.target.files);
    setFile({
      ...file,
      file: filesInArr,
    });
  }

  const texthandler = (e) => {
    const { value, name } = e.target;
    setDatalist({
      ...datalist,
      [name]: value,
    });
  };

  //데이터 전송
  function formfile(e) {
    e.preventDefault();
    const formData = new FormData();
    file.file.map((res) => formData.append("file", res));

    sr.fileupload(formData);
    sr.test(datalist);
  }


  const baa = (value) => {   
    value.preventDefault();
    const formData = new FormData();
    file.file.map((res) => formData.append("file", res));
    
    let notice = {
        title: datalist.title,
        contents: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    }
    axios.post("/api/notice/add", notice).then((res) => {
        // window.location.href="/notice";
        sr.fileupload(formData);
        console.log("업로드 성공");

    }).catch((err) => {alert("공지사항을 올릴 수 없습니다.")})
    
  }


  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };



const editorToHtml = editorState => {
  return draftToHtml(convertToRaw(editorState.getCurrentContent()))
}


  return (
    <div calss="row">
      <div class="col-md-12" style={{ marginTop: "10px" }}>
        <div class="card card-secondary">
          <div class="card-header">
            <h3 class="card-title">공지 사항</h3>
          </div>

          <form onSubmit={baa}>
            <div class="card-body">
              <div class="form-group">
                <label>제 목</label>
                <input
                  type="text"
                  class="form-control"
                  id="Nt_title"
                  placeholder="제 목"
                  name="title"
                  onChange={texthandler}
                />
              </div>

              <div class="form-group">
                <label for="exampleInputFile">파일 첨부</label>
                <div class="input-group">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      name="filename"
                      multiple="multiple"
                      onChange={handleChange}
                    />
                    <label class="custom-file-label">
                      {file.file.map((res) => res.name + ",")}
                    </label>
                  </div>
                </div>
              </div>

              <div class="card card-outline card-info">
                <div class="card-header"></div>
                <div class="card-body">
                  <Editor
                    editorStyle={{ minHeight: '400px' }}
                    placeholder="내용을 작성해주세요."
                    // 한국어 설정
                    localization={{
                      locale: "ko",
                    }}
                  

                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
                </div>
                
                { <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml(editorState) }} /> }

                <div class="card-footer"></div>
              </div>
            </div>
            <div class="card-footer">
              <a
                href="/notice"
                class="btn btn-primary float-right"
                style={{ marginLeft: "5px" }}
              >
                닫기
              </a>
              <button class="btn btn-primary float-right">저장</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeAdd;
