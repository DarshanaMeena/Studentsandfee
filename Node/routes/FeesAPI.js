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

const moment = require('moment')

routes.get('/StudDataFees/:id',upload.none(),(req,res)=>{
    //return res.send(req.body)
    mysql.query(`SELECT student_registration.stude_name, student_registration.stude_fname, batches.id as batch_id, courses.couses_name,courses.duration,courses.fees FROM student_registration join batches ON batches.id = student_registration.betch_id join courses ON courses.id = batches.course_id WHERE student_registration.stud_id = ${req.params.id}`,(error,result)=>{
    if(error){
        return res.status(500).json(error);
    }
    return res.status(200).json(result);
  })
})
routes.post('/FeesData/:stud_id' ,upload.none(), (req,res) => {
  //    return res.send(req.body)
  let {paydate,paytype,downPay,mode} = req.body;
    
    mysql.query(`INSERT INTO student_fees(stud_id,pay_date,pay_type,amount,status,mode) VALUES('${req.params.stud_id}','${paydate}','${paytype}','${downPay}','Paid','${mode}')`,(error,result) => {
        if(error) {
            return res.status(500).json(error);
        }
        else {


            //Generating emis

            let emis = req.body.emis;

            let cnt = 1;

            emis.map(amt => {

                const currentDate = moment().set('date', 10);

                // Add one month
                const futureMonth = currentDate.add(cnt, 'month');

                cnt++;

                // Format the date (optional)
                const formattedDate = futureMonth.format('YYYY-MM-DD');

                mysql.query(`INSERT INTO student_fees(stud_id,pay_date,pay_type,amount,status,mode) VALUES(${req.params.stud_id},'${formattedDate}','3','${amt}','Pending','')`,(error,result) => {

                    
                    
                });
                
            });

            return res.status(200).json(result);

            
        }
    })
  // res.send("im get");
});

routes.get('/paidfeeamount/:stud_id', upload.none(), (req,res)=>{

    mysql.query(`SELECT sum(amount) as totalpaidfee from student_fees where stud_id = ${req.params.stud_id} AND status = 'Paid'`,(error, result)=>{
        if(error){
            return res.status(500).json(error)
        }

            return res.status(200).json(result);
        
    })

})

routes.get("/allFeesdata/:stud_id", upload.none(), (req,res)=>{
    // return res.send(req.body)
     
     mysql.query(`select * from student_fees where stud_id = ${req.params.stud_id} `, (error, result)=>{
         if(error){
             return res.status(500).json(error)
         }
 
             return res.status(200).json(result);
         
     })
    
 })

routes.get("/viewfees/:id", upload.none(), (req,res)=>{
  // return res.send(req.body)
 
   mysql.query(`SELECT student_registration.stude_name, student_registration.stude_fname, batches.id as batch_id, courses.couses_name,courses.duration,courses.fees FROM student_registration join batches ON batches.id = student_registration.betch_id join courses ON courses.id = batches.course_id WHERE student_registration.stud_id = ${req.params.id}`, (error, result)=>{
       if(error){
           return res.status(500).json(error)
       }

           return res.status(200).json(result);
       
   })
  
})
module.exports = routes;