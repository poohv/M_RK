import React, { useState } from "react";
import sr from "../Service/Apiservice";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NoticeDetail = () => {
  const [file, setFile] = useState({
    file: [],
  });
  const [datalist, setDatalist] = useState([]);

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

    console.log(datalist);
  };

  //데이터 전송
  function formfile(e) {
    e.preventDefault();
    const formData = new FormData();
    file.file.map((res) => formData.append("file", res));

    sr.fileupload(formData);
    sr.test(datalist);
  }

  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  return (
    <div calss="row">
      <div class="col-md-12" style={{ marginTop: "10px" }}>
        <div class="card card-secondary">
          <div class="card-header">
            <h3 class="card-title">공지 사항</h3>
          </div>

          <form onSubmit={formfile}>
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

export default NoticeDetail;
