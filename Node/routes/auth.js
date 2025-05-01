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

routes.post("/login/:role", upload.none(), (req,res)=>{
    let {role} = req.params
   // return res.send(req.body)
    const {email , password} = req.body;

    mysql.query(`select * from student where email = '${email}' AND pass = '${md5(password)}' AND role = ${role}`, (error, result)=>{
        if(error){
            return res.status(500).json(error)
        }

            return res.status(200).json(result);
        
    })
   
});
routes.post('/data' ,upload.none(), (req,res) => {
    //    return res.send(req.body)
    let {name,email,phone,qualification,address} = req.body;
    
    mysql.query(`INSERT INTO student(name,email,pass,phone,qualification,address) VALUES('${name}','${email}','${md5('param')}','${phone}','${qualification}','${address}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});

routes.get("/userdata", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select * from student where role=2`, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

 routes.get("/edit/:id",upload.none(),(req,res) => {
    let {id} = req.params;
    mysql.query(`SELECT * from student where id = '${id}'`, (error,result) => {
        if(error) {
            return res.status(500).json(error)
        }
        return res.status(200).json(result);
    } )
 })

 routes.put('/update',upload.none(),(req,res) => {
    mysql.query(`UPDATE student SET name = '${req.body.name}' , email = '${req.body.email}' , phone = '${req.body.phone}', qualification = '${req.body.qualification}' , address = '${req.body.address}' WHERE id = '${req.body.id}'` , (error,result) => {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json(result);
        }
    })
});

 routes.delete("/delet", upload.none(),(req,res)=> {
    mysql.query(`DELETE FROM student WHERE id = '${req.body.id}'` , (error,result) => {
        if(error) {
            res.status(500).json(error);
        } else {
            res.status(200).json("delete successfully");
        }
    });
 })

 routes.post('/search',upload.none(),(req,res) => {
    let serachval = req.body.seachusers;
    mysql.query(`SELECT * FROM student WHERE role = 2 AND  name LIKE '%${serachval}%' or  email LIKE '%${serachval}%'`,(error,result) => {
        return res.json(result);
    })
}) 

module.exports = routes;



