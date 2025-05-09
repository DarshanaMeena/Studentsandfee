import React, { useEffect, useState } from 'react'
import Managmentnavbar from './Managmentnavbar'
import CallAjax from '../Hook/CallAjax';
import $ from "jquery"
import { useNavigate, useParams } from 'react-router-dom';

function FeesDetail() {

    const [emis, setEmis] = useState([]);

    const [StData, setStData] = useState([]);

    const [displayEmi, setDisplayEmi] = useState('hidden');

    const { id } = useParams();

    async function handleEmais(ev) {

        const noOfEmis = ev.target.value;

        let dpay = $("#down_pay").val();

        let cfees = StData[0]['fees'];

        let remaining_amount = cfees - parseInt(dpay);

        let emipay = remaining_amount / parseInt(noOfEmis);

        console.log('Emi payment = ', emipay);

        const emiArr = [];

        let i = 0;

        for (i = 0; i < parseInt(noOfEmis); i++) {
            emiArr[i] = {
                emi: i,
                amt: Math.ceil(emipay)
            };
        }

        console.log(emiArr)

        setEmis(emiArr);

    }

    async function getStudData() {
        let studData = await CallAjax(`http://localhost:4050/StudDataFees/${id}`, {}, 'GET');
        setStData(studData);
    }
    useEffect(() => {
        getStudData();

    }, [])

    function paytype(type) {

        if (type == 2) {

            $("#box-1").prop('checked', false)
            $("#box-2").prop('checked', true)

            setDisplayEmi('block')

        } else {
            $("#box-1").prop('checked', true)
            $("#box-2").prop('checked', false)
            setDisplayEmi('hidden')

        }

    }
    const redirect = useNavigate()
    async function stud_formdata(ev) {
        ev.preventDefault();

        let formdata = new FormData($("#FeesDetails")[0]);
        let result = await CallAjax(`http://localhost:4050/FeesData/${id}`, formdata, 'POST');
        console.log(result)
        if (result) {
            alert("Registration Successfuly!")
            return redirect(`/viewFees/${id}`);
        } else {
            console.log('failed')
            toast.error("Something Went Wrong. Please Try Again!");
        }
    }

    /* async function emiChange(ev, srno){
 
         let emiVal = ev.target.value;
         
         let newval = await{...emis,[emis[srno]['amt']]:emiVal}; 
               
         setEmis([newval]);
 
         console.log(emis)
     }*/

    async function emiChange(ev, srno) {
        let emiVal = ev.target.value;

        // Copy current EMI array
        let updatedEmis = [...emis];

        // Update specific EMI value
        updatedEmis[srno] = {
            ...updatedEmis[srno],
            amt: parseInt(emiVal)
        };

        setEmis(updatedEmis);

        let cfees = StData[0]['fees'];

        let emissum = parseFloat($("#down_pay").val());

        $('.student-emis').each(function (index, element) {

            if (index <= srno) {
                emissum = emissum + parseFloat($(this).val());
            }

        });

        let remFess = cfees - emissum;

        let noofEmais = emis.length - 1 - srno;

        let emiamt = Math.ceil(remFess / noofEmais);

        $('.student-emis').each(function (index, element) {

            if (index > srno) {
                updatedEmis[index] = {
                    ...updatedEmis[index],
                    amt: parseInt(emiamt)
                };

                setEmis(updatedEmis);
            }
        });

    }

    return (
        <div>
            <Managmentnavbar />
            <form onSubmit={stud_formdata} id='FeesDetails'>
                <div className='bg-gray-600'>
                    <section class="bg-white mt-5 p-1 xs:p-8">
                        <div class=" max-w-96 sm:max-w-4xl mx-auto rounded-lg p-8 shadow-2xl">
                            <h2 class="sm:text-xl text-[12px] font-bold mb-6">Fees Detail</h2>

                            {
                                StData.map((getdata) => (
                                    <div class="space-y-6">

                                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">



                                            <div>
                                                <label for="category" class="text-sm xs:text-sm font-medium text-gray-700 ">Student Name</label>
                                                <p class="h-[50px] rounded-[5px] text-[17px] xs:text-sm border border-[#D1D5DB] w-full px-3 py-3" disabled='true' name='studName'>{getdata.stude_name}</p>
                                            </div>
                                            <div>
                                                <div>
                                                    <label for="category" class="text-sm xs:text-sm font-medium text-gray-700 ">Course Name</label>
                                                    <p type='text' class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-3 py-3" disabled='true' name='courseName' >{getdata.couses_name}</p>
                                                </div>
                                            </div>

                                        </div>


                                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                                <label for="category" class="text-sm xs:text-sm font-medium text-gray-700 ">Duration</label>
                                                <p type='text' class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-3 py-3" disabled='true' name='duration' >{getdata.duration}</p>
                                            </div>
                                            <div>
                                                <label for="category" class="text-sm xs:text-sm font-medium text-gray-700 ">Total Fee:</label>
                                                <p type='text' class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-3 py-3" disabled='true' name='totalFees' >{getdata.fees}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }



                        </div>
                    </section>
                </div>

                <section class="bg-white mt-2 p-1 xs:p-8">
                    <div class="  max-w-96 sm:max-w-4xl mx-auto  rounded-lg p-8 shadow-2xl">
                        <h2 class="sm:text-xl text-[12px] font-bold mb-6">Payment Method</h2>
                        
                        <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <label for="category" class="text-[15px] xs:text-sm font-medium text-gray-700 "> Payment Date</label>
                            <input type='date' class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-2" id="pay_date" name='paydate' />
                        </div>
                        <div>
                                    <label for="category" class="text-[15px] xs:text-sm font-medium text-gray-700 ">Pay Mode</label>


                                    <select class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-2" onChange={handleEmais} name='mode'>
                                        <option value="">--Select Mode--</option>
                                        <option value="cash">Cash</option>
                                        <option value="online">Online</option>
                                    </select>


                                </div>
                                </div>
                        <div class="space-y-6">

                            <div class="grid sm:grid-cols-3  grid-cols-1 gap-6 mt-5">

                                <div className='grid grid-cols-2'>
                                    <label for="category" class="text-[15px] xs:text-sm font-medium text-gray-700 mb-1">Full Payment</label>


                                    <input type="checkbox" id="box-1" name='paytype' class=" w-[20px] h-[25px] border border-black rounded-sm bg-white checked:bg-bule-900  cursor-pointer " onChange={() => paytype(1)} value="1" />
                                </div>

                                <div className='grid grid-cols-2'>
                                    <label for="category" class="text-[15px] xs:text-sm font-medium text-gray-700 mb-1">Partial Payment</label>


                                    <input type="checkbox" id="box-2" name='paytype' class=" w-[20px] h-[25px] border border-black rounded-sm bg-white checked:bg-bule-900  cursor-pointer " onChange={() => paytype(2)} value="2" />
                                </div>

                            </div>

                            <div class={`grid sm:grid-cols-2 grid-cols-1 gap-6 ${displayEmi}`}>
                                <div>
                                    <label for="category" class="text-[15px] xs:text-sm font-medium text-gray-700 ">Down Payment</label>
                                    <input type='text' class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-2" id="down_pay" name='downPay' />
                                </div>


                                <div>
                                    <label for="category" class="text-[15px] xs:text-sm font-medium text-gray-700 ">Number of EMI'S</label>


                                    <select class="h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-2" onChange={handleEmais} name='noofemais'>
                                        <option value="1">--Select EMI'S--</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>

                                    </select>


                                </div>


                                {/*  Creating Fields For Emis */}

                                {
                                    emis.map(val => (

                                        <div className=' '>
                                            <div className='text-lg ms-4 mt-1'>
                                                <label >Emai-{val.emi + 1} </label>

                                            </div>

                                            <div className=''>

                                                <input class={`h-[50px] rounded-[5px] text-[16px] xs:text-sm border border-[#D1D5DB] w-full px-2 student-emis student-emis-${val.emi}`} value={val.amt} onChange={(ev) => emiChange(ev, val.emi)} name="emis[]"></input>


                                            </div>

                                        </div>

                                    ))

                                }
                            </div>

                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                            <button type="submit" class=" sm:w-[100px] w-full h-[50px] text-xs sm:text-base bg-blue-900 rounded-[5px] p-[13px_25px] gap-[10px] text-white ">Save</button>
                        </div>

                    </div>
                </section>


            </form>
        </div>


    )
}

export default FeesDetail
