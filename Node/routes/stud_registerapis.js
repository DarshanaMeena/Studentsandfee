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



routes.post('/studentdata' ,upload.none(), (req,res) => {
    //    return res.send(req.body)
    let {sname,fname,date,email,sphone,fphone,gender,category,classname, batch,city,address,village} = req.body;
    
    mysql.query(`INSERT INTO student_registration(stude_name,stude_fname,stude_email,stude_pass,stude_dob,stude_snum,stude_pnum,gender,category,betch_id,city_id,village_id,address,education) VALUES('${sname}','${fname}','${email}','${md5('meena')}','${date}','${sphone}','${fphone}','${gender}','${category}','${batch}','${city}','${village}','${address}','${classname}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});

//Student Login

routes.post("/studentlogin", upload.none(), (req,res)=>{
    // let {role} = req.params
   // return res.send(req.body)
    const {email , password} = req.body;

    mysql.query(`select * from student_registration where stude_email = '${email}' AND	stude_pass ='${md5(password)}'`, (error, result)=>{
        if(error){
            return res.status(500).json(error)
        }

            return res.status(200).json(result);
        
    })
   
});

// all studetn record (get method)
routes.get("/allstudentdata", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select * from student_registration JOIN batches on batches.id = student_registration.betch_id JOIN cities on cities.city_id =student_registration.city_id JOIN villages on villages.village_id =student_registration.village_id where student_registration.status=1`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

//  select betch (get method)
 routes.get("/getbetchselect", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select * from batches where status=1`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

//  delete student record (delete method)
 routes.delete("/deletestudentrecord",upload.none(),(req,res) => {
    mysql.query(`DELETE FROM student_registration WHERE stud_id='${req.body.id}' AND is_delete = 0`,(error,result)=> {
       if(error) {
        res.status(500).json(error)
       } else {
        res.status(200).json('Delet Successfully!')
       }
    })
 })

 routes.get("/editstudentform/:id",upload.none(),(req,res) => {
    let {id} = req.params;
    mysql.query(`SELECT * from student_registration where stud_id ='${id}'`, (error,result) => {
        if(error) {
            return res.status(500).json(error)
        }
        return res.status(200).json(result);
    } )
 })

 //Edit Students

routes.put('/editstud',upload.none(),(req,res)=>{
    const {sname,fname,email,dob,sphone,fphone,gender,category,classname,batch,address,city,village}=req.body;
    let stude_id = req.params.id;
    mysql.query(`UPDATE student_registration SET stude_name = '${sname}', stude_fname='${fname}', stude_email= '${email}', stude_dob='${dob}',stude_snum='${sphone}',stude_pnum='${fphone}',gender='${gender}',category='${category}',education='${classname}',betch_id='${batch}',address='${address}',city_id='${city}',village_id='${village}' WHERE stud_id='${stude_id}'`,(error,result)=>{
      if(error){
        return res.status(500).json(error);
      }
      return res.status(200).json(result);
    })
  })

//  get city (get method)
 routes.get("/getallcities", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select city_id as value,city_name as label from cities`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

//  get village (get method)
 routes.get("/getallvillages", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select village_id as value,village_name as label from villages `, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

 //get district(get method)
 routes.get("/getalldistrict",upload.none(),(req,res)=>{
    mysql.query(`select distict_id as value,dist_name as label from district`,(error,result)=>{
        if(error){
            return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
    })
 })

//  ADD CITY API (post method)

 routes.post('/addcity' ,upload.none(), (req,res) => {
    //    return res.send(req.body)
    let {city} = req.body;
    
    mysql.query(`INSERT INTO cities(city_name) VALUES('${city}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});

// ADD Village API (post method)
routes.post('/addvillage' ,upload.none(), (req,res) => {
    //    return res.send(req.body)
    let {village} = req.body;
    
    mysql.query(`INSERT INTO villages(village_name) VALUES('${village}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});

//ADD District API (post method) 
routes.post('/adddistict' ,upload.none(), (req,res) => {
    //    return res.send(req.body)
    let {dist} = req.body;
    
    mysql.query(`INSERT INTO district(dist_name) VALUES('${dist}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});




// Student view details (get Method)
routes.get("/viewdetails/:id", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select * from student_registration JOIN batches on batches.id = student_registration.betch_id JOIN cities on cities.city_id = student_registration.city_id JOIN villages on villages.village_id =student_registration.village_id where student_registration.status=1 AND stud_id= ${req.params.id}`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

 routes.get("/dashboarCouts", upload.none(), (req,res)=>{
    // return res.send(req.body)

    let courseCount = 0;
    let batchesCount = 0;
    let studCount = 0;
     
     mysql.query(`select count(*) AS totalcourses from courses where status = 1`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
           courseCount =  result[0]['totalcourses'];

            mysql.query(`select count(*) AS totalbatches from batches where status = 1`, (error, result)=>{
                if(error){
                    return res.status(500).json(error)
                }
        
                batchesCount =  result[0]['totalbatches'];

                mysql.query(`select count(*) AS totalStudents from student_registration where status = 1`, (error, result)=>{
                if(error){
                    return res.status(500).json(error)
                }
        
                studCount =  result[0]['totalStudents'];

                return res.status(200).json([{totalcourses : courseCount, totalbatches : batchesCount, totalStudents : studCount}]);
                
            })
                
            })
         
     })

     
    
 })

module.exports = routes;