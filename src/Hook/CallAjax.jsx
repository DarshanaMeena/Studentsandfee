import React from 'react'
import axios from 'axios'
async function CallAjax(apiUrl,postData,apiMethod) { 
    let response = await axios({
        url : apiUrl,
        method : apiMethod,
        data : postData,
        headers : {
            "Content-Type" : "multipart/form-data"
        }
      });

      
    
      return response.data;
}

export default CallAjax
