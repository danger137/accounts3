"use client";

import "./Resources.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Resources(){

  let move = useRouter();

  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };
    
 




    return <div>
    
        
    <div class="background-image2">
        <div class="bottom-overlay">
        <div className="container">
        <div className="row text-center text-md-start">
            <div className="col mb-3 d-flex align-items-center">
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Resources</p>
    
            </div>
    
            <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
             
            </div>
    
            <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
             
            </div>
    
            {/* Fourth Item with Increased Top Margin */}
            <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
               
            <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
            <i className="fa-solid fa-message"></i>
            <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: +1 (571) 682-9050</li>
                    <li style={{ color: "white" }}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" className="text-reset text-white">Ahashmi@live.com</a>


                    </li>
                    <li style={{ color: "white" }}>
                    <div className="d-flex justify-content-center gap-2">
                        
                        <i style={{cursor:"pointer"}} onClick={openFacebook} className="fa-brands fa-facebook-f mt-2"></i>
                    
                      
                                            
                        <a href="https://wa.me/15716829050" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp mt-2" style={{ color: 'white' }}></i>
</a>


                  
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" rel="noopener noreferrer">
<i class="fa-solid fa-envelope mt-2 " style={{ color: 'white',cursor:"pointer" }} ></i>
</a>

                                              <i className="fa-solid fa-wifi mt-2"></i>
               
                                          </div>
                  
                    </li>
                </ul>
            </div>
        </div>

            </div>
        </div>
    </div>
    
    
        </div>
        
    </div>
    
    <div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-3 justify-content-center   ">
    <div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">
      <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        IN THIS SECTION:
      </li>

      <li  className="text-lg-end"  >
      <Link href={"/ClientPortal"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Client Portal
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/SecureSend"} className="h5 text-center text-lg-end hover-text-gold  " style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      SecureSend
</Link>
      </li>
  
  


    
      <li className="h5 mt-5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        Quick Links:
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/FinancialCalculators"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Financial Calculators
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/SecureSend"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Send Us A File
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/IRS"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      IRS Tax Forms
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/State"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      State Tax Forms
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/TaxDueDate"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Tax Due Dates
</Link>
      </li>
   
  
 
    </ul>
  </div>
      
      <div className=" text-center text-md-start"  >
    
    
         {/* Center text on small screens and align left on medium and larger screens */}
      <ul className="list-unstyled mt-3">
    
      <div className="container">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
    
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-1" style={{ width: "100%" }}>
        <div >
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center" style={{lineHeight: "30px", fontWeight: "300", width: "100%"}}>
        <Link href={"/ClientPortal"} className="h5 mb-0 text-center text-md-start" style={{lineHeight: "30px", fontWeight: "500",color:"#0078a5"}}>
        Client Portal
        </Link>
      </div>
    </div>
    
    </div>
    
        <div className="d-flex justify-content-center justify-content-lg-start  " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
          Log into our secure, password protected Client Portal to store and access your important financial documents from anywhere at anytime.
          </p>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-5" style={{ width: "100%" }}>
        <div >
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center" style={{lineHeight: "30px", fontWeight: "300", width: "100%"}}>
        <Link href={"/SecureSend"} className="h5 mb-0 text-center text-md-start" style={{lineHeight: "30px", fontWeight: "500",color:"#0078a5"}}>
        SecureSend
        </Link>
      </div>
    </div>
    
    </div>
    
        <div className="d-flex justify-content-center justify-content-lg-start  " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
          Quickly send us a secure message with an attachment
          </p>
        </div>
     
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-3" style={{ width: "100%" }}>
        <div >
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center" style={{lineHeight: "30px", fontWeight: "300", width: "100%"}}>
        <Link href={"/SecurityMeasures"} className="h5 mb-0 text-center text-md-start" style={{lineHeight: "30px", fontWeight: "500",color:"#0078a5"}}>
        Security Measures
        </Link>
      </div>
    </div>
    
    </div>
    
        <div className="d-flex justify-content-center justify-content-lg-start  " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "50vw"}}>
          Your data is protected in extremely secure environments.
          </p>
        </div>
  
       
    
      </div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>
    
    
    
    
    
    
    
    
    </div>
    
    
    
    
    }
    
    
    
    



