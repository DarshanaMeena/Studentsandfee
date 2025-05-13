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

routes.post('/addcoursedata' ,upload.none(), (req,res) => {
    //    return res.send(req.body)
    let {coursename,duration,fees,coursecatagery} = req.body;
    
    mysql.query(`INSERT INTO courses(couses_name,duration,fees,course_catagery) VALUES('${coursename}','${duration}','${fees}','${coursecatagery}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});

routes.get("/coursedata", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select * from courses where status=1`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

 routes.delete("/deletcourse", upload.none(),(req,res)=> {
    mysql.query(`DELETE FROM courses WHERE id = '${req.body.cid}'` , (error,result) => {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json("delete successfully");
        }
    });
 })

 routes.get("/editcourse/:id",upload.none(),(req,res) => {
    let {id} = req.params;
    mysql.query(`SELECT * from courses where id = '${id}'`, (error,result) => {
        if(error) {
            return res.status(500).json(error)
        }
        return res.status(200).json(result);
    } )
 })

 routes.put('/updatecourse',upload.none(),(req,res) => {
    mysql.query(`UPDATE courses SET  couses_name = '${req.body.coursename}' , duration = '${req.body.duration}', fees = '${req.body.fees}' WHERE id = '${req.body.id}'` , (error,result) => {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(result);
        }
    })
});

module.exports = routes;