import { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { redirect } from "react-router-dom";
const Convertcurancy = () => {
    const [from,setfrom]=useState()
    const [to,setto]=useState()
    const [result,setresult]=useState('')
    const[amount,setamount]=useState()


    const currancy=[
        {'id':1,'country_name':'Albania','Currency_code':'ALL'},
        {'id':2,'country_name':'Afghanistan','Currency_code':'AFN'},
        {'id':3,'country_name':'Argentina','Currency_code':'ARS'},
        {'id':4,'country_name':'Aruba','Currency_code':'AWG'},
        {'id':5,'country_name':'Australia','Currency_code':'AUD'},
        {'id':6,'country_name':'Azerbaijan','Currency_code':'AZN'},
        {'id':7,'country_name':'Bahamas','Currency_code':'BSD'},
        {'id':8,'country_name':'Barbados','Currency_code':'BBD'},
        {'id':9,'country_name':'Belarus','Currency_code':'BYN'},
        {'id':10,'country_name':'Belize','Currency_code':'BZD'},
        {'id':11,'country_name':'Bermuda','Currency_code':'BMD'},
        {'id':12,'country_name':'Bolivia','Currency_code':'BOB'},
        {'id':13,'country_name':'Bulgaria','Currency_code':'BGN'},
        {'id':14,'country_name':'Brazil','Currency_code':'BRL'},
        {'id':15,'country_name':'Cambodia','Currency_code':'KHR'},
        {'id':16,'country_name':'Canada','Currency_code':'CAD'},
        {'id':17,'country_name':'Cayman','Currency_code':'KYD'},
        {'id':18,'country_name':'Chile','Currency_code':'CLP'},
        {'id':19,'country_name':'Egypt','Currency_code':'EGP'},
        {'id':20,'country_name':'Iceland','Currency_code':'ISK'},
        {'id':21,'country_name':'India','Currency_code':'INR'},
        {'id':22,'country_name':'Indonesia','Currency_code':'IDR'},
        {'id':23,'country_name':'Japan','Currency_code':'JPY'},
        {'id':24,'country_name':'Korea (South)','Currency_code':'KRW'},
        {'id':25,'country_name':'Korea (North)','Currency_code':'KPW'},
        {'id':26,'country_name':'Lebanon','Currency_code':'LBP'},
        {'id':27,'country_name':'Malaysia','Currency_code':'MYR'},
        {'id':28,'country_name':'Oman','Currency_code':'OMR'},
        {'id':29,'country_name':'Pakistan','Currency_code':'PKR'},
        {'id':30,'country_name':'Qatar','Currency_code':'QAR'},
        {'id':31,'country_name':'Russia','Currency_code':'RUB'},
        {'id':32,'country_name':'Saudi Arabia','Currency_code':'SAR'},
        {'id':33,'country_name':'Sweden','Currency_code':'SEK'},
        {'id':34,'country_name':'Switzerland','Currency_code':'CHF'},
        {'id':35,'country_name':'Suriname','Currency_code':'SRD'},
        {'id':36,'country_name':'Syria','Currency_code':'SYP'},
        {'id':37,'country_name':'Turkey','Currency_code':'TRY'},
        {'id':38,'country_name':'United States','Currency_code':'USD'},
        {'id':39,'country_name':'Uruguay','Currency_code':'UYU'},
        {'id':40,'country_name':'Uzbekistan','Currency_code':'UZS'},
        {'id':41,'country_name':'Yemen','Currency_code':'YER'},
        {'id':42,'country_name':'Zimbabwe','Currency_code':'ZWD'},
      ];

      const convert=()=>{
        const myHeaders = new Headers();
          myHeaders.append("apikey", "Qavfv9VlfKEFAIyHmnhdSq9VHgVj16MR");

            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setresult(data);
                console.log(data);
               
            })
        }

    return (
    <>
         <MainLayout>
              <div className="container">
                 <div className="row">
                    <div className="col">
                        <div className="card mt-5">
                           
                            <div className="card-body">
                            <h4 >خدمة تحويل العملات</h4>
                                <div className="row">
                                    <div className="col">
                                        
                                      <select className="form-select" onChange={(e)=>setfrom(e.target.value)} >
                                        {
                                            currancy.map((e)=>(

                                              <option value={e.Currency_code}><span className="text-dark">{e.country_name}</span></option>

                                            ))
                                        }
                                      </select>
                                    </div>
                                    <div className="col">
                                        <select className="form-select" onChange={(e)=>setto(e.target.value)} >
                                        {
                                            currancy.map((e)=>(

                                              <option value={e.Currency_code}><span className="text-dark">{e.country_name}</span></option>

                                            ))
                                        }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col">
                                        <label className="form-label">المبلغ</label>
                                        <input type="text"  className="form-control" onChange={(e)=>setamount(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col text-center">
                                        <button className="btn btn-danger" onClick={convert}>تحويل</button>
                                    </div>
                                </div>


                                <div className="row mt-5">
                                <div className="col-sm-6">
                                      
                                    </div>
                                    <div className="col-sm-6">
                                        <h5 className="alert alert-success text-dark">{result.result}</h5>
                                        <h5 className="alert alert-success text-dark">{result.query.from}-{result.query.to}</h5>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
         </MainLayout>
        
    
    </>
    
);
}
 
export default Convertcurancy;