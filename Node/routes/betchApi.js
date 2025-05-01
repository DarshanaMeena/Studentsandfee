const express  = require("express");

const bodyParser = require("body-parser");

const multer  = require('multer');

const upload = multer({ dest: '../uploads/' })

const md5 = require("md5")

const cors = require("cors");


const mysql = require("./dbconnection");

const routes = express.Router();

routes.use(bodyParser.urlencoded());

routes.use(express.json());

routes.use(cors());
routes.post ('/batchdata',upload.none(),(req,res)=>{
    //return res.send(req.body)
   const {batchname,coursename,starttime,endtime} = req.body;
   mysql.query(`INSERT INTO batches (batch_name,course_id,start_time,end_time) VALUES ('${batchname}','${coursename}','${starttime}','${endtime}')`,(error,result)=>{
       if(error){
           return res.status(500).json(error)
       }        
           return res.status(200).json(result);        
   })
})
routes.get('/betchget',upload.none(),(req,res)=>{
    //return res.send(req.body)
    mysql.query(`select batches.*, courses.couses_name from batches JOIN courses on courses.id = batches.course_id where batches.status =1`,(error,result)=>{
    if(error){
        return res.status(500).json(error);
    }
    return res.status(200).json(result);
  })
})
routes.get ('/getcourse',upload.none(),(req,res)=>{
  //return res.send(req.body)
mysql.query(`select * from courses where status=1`,(error,result)=>{
  if(error){
      return res.status(500).json(error);
  }
  return res.status(200).json(result);
})
})
routes.get ('/geteditcourse',upload.none(),(req,res)=>{
  //return res.send(req.body)
mysql.query(`select * from courses where status = 1`,(error,result)=>{
  if(error){
      return res.status(500).json(error);
  }
  return res.status(200).json(result);
})
})
routes.delete('/bdelete',upload.none(),(req,res)=>{
  let bid=req.body.id;
  mysql.query(`DELETE FROM batches where id = '${bid}' AND is_deleted = 0 `,(error,result)=>{
      if(error){
          return res.status(500).json(error)
      }
      return res.status(200).json(result)
  })
})    
routes.get('/batchedit/:id',upload.none(),(req,res)=>{
  let {id} = req.params;
  //return res.send(`SELECT * FROM batches where id='${id}'`)
  mysql.query(`SELECT * FROM batches where id='${id}'`,(error,result)=>{
    if(error){
      return res.status(500).json(error)
    }
    return res.status(200).jsonp(result)
  })
})
routes.put('/batchupdate',upload.none(),(req,res)=>{
  const {id,batchname,coursename,starttime,endtime}=req.body;
  mysql.query(`UPDATE batches SET batch_name = '${batchname}', course_id='${coursename}', start_time= '${starttime}',end_time='${endtime}' WHERE id='${id}'`,(error,result)=>{
    if(error){
      return res.status(500).json(error);
    }
    return res.status(200).json(result);
  })
})
module.exports = routes;
