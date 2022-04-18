import axios from "axios";

const API_BASE_URL  = "/api/";

class apiservice {

    fileupload(file){
        return axios.post(API_BASE_URL+"upload",file, {headers: { "Content-Type": "multipart/form-data"}
          });
        
    }


    noticedetail(params){
        return axios.post(API_BASE_URL+"noticedatail",params );   
    }

};

export default new apiservice;