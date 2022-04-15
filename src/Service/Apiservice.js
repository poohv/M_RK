import axios from "axios";

const API_BASE_URL  = "/api/";

class apiservice {

    fileupload(file){
        return axios.post(API_BASE_URL+"upload",file, {headers: { "Content-Type": "multipart/form-data"}
          });
        
    }


    test(file){
        return axios.post(API_BASE_URL+"test",file  );
        
    }

};

export default new apiservice;