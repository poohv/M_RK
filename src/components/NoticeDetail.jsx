import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import draftToHtml from 'draftjs-to-html';
import { EditorState,convertToRaw } from 'draft-js';
import { useLocation } from "react-router-dom";
import datadummy from "../data.json";
import { Editor } from "react-draft-wysiwyg";

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

function NoticeDetail() { 

    const params = useLocation();
    const [file, setFile] = useState({file: []});
    const [datalist, setDatalist] = useState([datadummy]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [editboolean, setEditboolean] = useState(false);


    const data = Array(1).fill().map(()=>(
      datalist.map(d=>d.data.filter(res=>res.ranking == 2))));
  
 

      console.log("넘어온값:"+ params.state.name) ;

      // editorState에 값 설정
      const onEditorStateChange = (editorState) => {  
        setEditorState(editorState);
      };

      //파일 다운로드
      function filedown(e){
        e.preventDefault();
        //아래로 api 호출
      
      }

      //저장 버튼
      function noticesave(){
      }

      //수정 활성화
      function activeEdit(e){
        e.preventDefault();
        setEditboolean(!editboolean);
      }

       //데이터 찾기
      useEffect(() => {
        async function fetchData() {  
         
        }
        fetchData();
      }, []);


    
      //파일 업로드 핸들러
      function handleChange(event) {
        const filesInArr = Array.from(event.target.files);
        setFile({
          ...file,
          file: filesInArr,
        });
      }

      //input 핸들러
      const texthandler = (e) => {
        const { value, name } = e.target;
        setDatalist({
          ...datalist,
          [name]: value,
        });
      };

  const editorToHtml = editorState => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()))
  }
  //{selectnt.map(d=>d.map(e=>e.ranking))}
  
  const selectnt = datalist.map(res=>res.data.filter(res=>res.ranking == 2).map((w)=>(
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
              readOnly="readOnly"
              style={{backgroundColor:"white"}}
            value={w.ranking}
            />
          </div>
          
          {data.map(r=>r.map(d=>d.map(t=>t.daily_count)))}
         :
         
            <div class="form-group">
            <label for="exampleInputFile">파일 첨부</label>
            <div class="input-group">
              <div class="custom-file">
                <a
                  href="#"
                  class="form-control"
                  name="filename"                 
                  onClick={filedown}
                >{datalist.map(res=>res.code)}</a>
               
              </div>
            </div>
          </div>
          <IntroduceContent dangerouslySetInnerHTML={{ __html: '<p style="text-align:center;">dddddddddddddddd</p>'}} />

          <div class="card-footer">
              <a
                href="/notice"
                class="btn btn-primary float-right"
                style={{ marginLeft: "5px" }}
              >
                닫기
              </a>
              <button class="btn btn-primary float-right" onClick={activeEdit}>수정</button>
            </div> 
        </div>
  )));

    return(
    <div calss="row">
      <div class="col-md-12" style={{ marginTop: "10px" }}>
        <div class="card card-secondary">
          <div class="card-header">
            <h3 class="card-title">공지 사항</h3>
          </div>
          <form>
            {editboolean ? <div class="card-body">
          <div class="form-group">
            <label>제 목</label>
            <input
              type="text"
              class="form-control"
              id="Nt_title"
              placeholder="제 목"
              name="title"
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
            

            <div class="card-footer">
                    <a
                      href="/notice"
                      class="btn btn-primary float-right"
                      style={{ marginLeft: "5px" }}
                    >
                      닫기
                    </a>
                    <button class="btn btn-primary float-right" onClick={noticesave} >저장</button>
                  </div>
          </div>
            </div> :selectnt }             
            
          </form>      
        </div>
      </div>
    </div>
    )

};

export default NoticeDetail;