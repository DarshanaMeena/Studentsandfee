const express = require("express");

const bodyParser = require("body-parser");

const multer = require('multer');

const upload = multer({ dest: '../uploads/' })

const md5 = require("md5")

const cors = require("cors");

const moment = require('moment')


const mysql = require("./dbconnection");

const routes = express.Router();

routes.use(bodyParser.urlencoded());

routes.use(express.json());

routes.use(cors());



routes.post('/studentdata', upload.none(), (req, res) => {
    let { sname, fname, date, email, sphone, fphone, gender,admition, category, classname, batch, district, course, city, address, village,password,cpassword } = req.body;

    mysql.query(`INSERT INTO student_registration(stude_name,stude_fname,stude_email,stude_dob,stude_snum,stude_pnum,gender,admition_date,category,betch_id,course_id,dis_id,city_id,village_id,address,education,stud_pass) VALUES('${sname}','${fname}','${email}','${date}','${sphone}','${fphone}','${gender}','${admition ? admition : moment(new Date()).format('YYYY-MM-DD')}','${category}','${batch}','${course}','${district}','${city}','${village}','${address}','${classname}','${password}')`, (error, result) => {
        if (error) {
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

        return res.status(200).json(result)
    });
});

routes.put('/editstud/:id', upload.none(), (req, res) => {
    const {  sname, fname,email, date, sphone, fphone, gender,admition, category, classname, batch, district, course, city, address, village,password, cpassword} = req.body;
    let stude_id = req.params.id;
    mysql.query(`UPDATE student_registration SET stude_name = '${sname}', stude_fname='${fname}', stude_email= '${email}', stude_dob='${date}',stude_snum='${sphone}',stude_pnum='${fphone}',gender='${gender}',admition_date='${admition ? admition : moment(new Date()).format('YYYY-MM-DD')}',category='${category}',education='${classname}',betch_id='${batch}',dis_id='${district}',course_id='${course}',city_id='${city}',address='${address}',village_id='${village}',stud_pass='${password}' WHERE stud_id='${stude_id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }
        return res.status(200).json(result);
    })
})

    

// all studetn record (get method)
routes.get("/allstudentdata", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select * from student_registration JOIN batches on batches.id = student_registration.betch_id JOIN courses on courses.id = student_registration.course_id JOIN cities on cities.city_id =student_registration.city_id  JOIN villages on villages.village_id =student_registration.village_id JOIN distric on distric.dis_id =student_registration.dis_id where student_registration.status=1 order by stud_id DESC`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})

//  select betch (get method)
routes.get("/getbetchselect", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select * from batches where status=1`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})
routes.get("/getcoursesselect", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select * from courses where status=1`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})

//  delete student record (delete method)
routes.delete("/deletestudentrecord", upload.none(), (req, res) => {
    mysql.query(`DELETE FROM student_registration WHERE stud_id='${req.body.id}' AND is_delete = 0`, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json('Delet Successfully!')
        }
    })
})

routes.get("/editstudentform/:id", upload.none(), (req, res) => {
    let { id } = req.params;
    mysql.query(`SELECT * from student_registration where stud_id = '${id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }
        return res.status(200).json(result);
    })
})
// get distrcic
routes.get("/getalldistric", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select dis_id as value,dis_name as label from distric `, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})


// get distrcic
routes.get("/getalldistric/:dis_id", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select dis_id as value,dis_name as label from distric WHERE dis_id = ${req.params.dis_id}`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})
//  get city (get method)
routes.get("/getallcities/:d_id", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select city_id as value,city_name as label from cities WHERE d_id = '${req.params.d_id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})
routes.get("/getcitybyid/:city_id", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select city_id as value,city_name as label from cities WHERE city_id = '${req.params.city_id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})


//  get village (get method)
routes.get("/getallvillages", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select village_id as value,village_name as label from villages WHERE city_id = '${req.params.city_id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})

routes.get("/gettehvillages/:teh_id", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select village_id as value,village_name as label from villages WHERE city_id = '${req.params.teh_id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})
routes.get('/getbatchessselect/:c_id',upload.none(),(req,res)=>{
    //return res.send(req.body)
   mysql.query(`select * from batches WHERE course_id='${req.params.c_id}'`,(error,result)=>{
    if(error){
        return res.status(500).json(error);
    }
    return res.status(200).json(result);
  })
})

routes.get("/getallvillages/:village_id", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select village_id as value,village_name as label from villages WHERE village_id = '${req.params.village_id}'`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})
routes.get("/getvillagebyid/:village_id", upload.none(), (req, res) => {
    // return res.send(req.body)

    mysql.query(`select village_id as value,village_name as label from villages WHERE village_id = ${req.params.village_id}`, (error, result) => {
        if (error) {
            return res.status(500).json(error)
        }

        return res.status(200).json(result);

    })

})
routes.post('/adddis', upload.none(), (req, res) => {
    //    return res.send(req.body)
    let { cialldistrcity } = req.body;

    mysql.query(`INSERT INTO distric(dis_name) VALUES('${cialldistrcity}')`, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }

            return res.status(200).json(result);
        
    })
   
});
//  ADD CITY API (post method)

routes.post('/addcity', upload.none(), (req, res) => {
    //    return res.send(req.body)
    let { city, dis } = req.body;

    mysql.query(`INSERT INTO cities(city_name, d_id) VALUES('${city}', '${dis}')`, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }
        else {
            return res.status(200).json(result);
        }
    })
    // res.send("im get");
});

// ADD Village API (post method)
routes.post('/addvillage', upload.none(), (req, res) => {
    //    return res.send(req.body)
    let { village,teh } = req.body;

    mysql.query(`INSERT INTO villages(village_name,city_id) VALUES('${village}','${teh}')`, (error, result) => {
        if (error) {
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
routes.get("/viewdetails/:id", upload.none(), (req, res) => {
    // return res.send(req.body)
     
     mysql.query(`select * from student_registration JOIN batches on batches.id = student_registration.betch_id JOIN cities on cities.city_id =student_registration.city_id JOIN courses on courses.id = student_registration.course_id JOIN villages on villages.village_id =student_registration.village_id JOIN distric on distric.dis_id =student_registration.dis_id where student_registration.status=1 AND stud_id= ${req.params.id}`, (error, result)=>{
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