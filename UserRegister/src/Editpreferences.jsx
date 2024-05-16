import React from "react"
import "./editpreferences.css"
import ReactPaginate from 'react-paginate';
import { Pagination } from "@mui/material";
import PaginationComponent from "./pagination";


function Editpreferences(){
  const handlePageClick=()=>{

  }
    return(
        <div className="main-container">
        
        <div className="navpos">
    
    <nav className="navbar navbar-icon-top navbar-expand-lg" style={{paddingLeft: "10vw",display:"flex",height:"10vh",marginTop:"15px"}}>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontWeight: "bolder",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <ul className="navbar-nav mr-auto" style={{listStyleType:"none",display:"flex",justifyContent:"space-between",width:"40vw",marginTop:"7px",fontSize:"13px"}}>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i className="fas fa-home" style={{color: "white", right:" 50px",marginTop:"5px" }}><br/><br/>
                Home
                </i>
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-envelope" style={{color: "white",right: "230px"}}><br/><br/>
                    Email
                  <span className="badge badge-danger" style={{color: "red"}}></span>  </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-envelope" style={{color: "white",right: "210px"}}><br/><br/>
                    Chats
                  <span className="badge badge-warning"></span>
              
              </i></a> 
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#" id="">
                <i className="fas fa-envelope" style={{color: "white",right: "180px"}}><br/><br/>
                    Matches
                  <span className="badge badge-primary"></span>
                </i> 
              </a>
           
             
            </li>
           <li className="nav-item ">
              <a className="nav-link" href="#">
                <i className="fas fa-bell" style={{color:"white",right: "150px"}}> <br/><br/>
                    Notifications
                
                  <span className="badge badge-info" ></span> 
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-globe" style={{color: "white",right: "80px"}}><br/><br/>
               
                  <span className="badge badge-success" ></span>
                  profile
                </i>
               
              </a>
            </li>
          </ul>
          <div className="form-inline my-0 my-lg-0" style={{display: "flex",width:"28vw",marginLeft:"50px"}}>
            <input className="form-control mr-sm-1" type="text" style={{height:"20px",width:"140px"}} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-0 my-sm-1" style={{height:"40px",width:"10vw",textAlign:"center",marginTop:"20px"}} type="submit">Search</button>
          </div>
        </div>
      </nav>
    </div>
    
  
        
    <div className="profilecard">
        <br/>
        <div className="image-crop">
            <img id="avatar" src="https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl"/>
        </div>
        <div id="bio" >
            <p id="name"> Hai! Jeshvik</p>
            <p id="idnumber">AP12345</p>
         <p><b>Membership:Free</b></p>
         <p>Became Paid Member Now</p>
         <div id="buttons">
            <button style={{ left:"100px "}}>Upgrade</button>
            
        </div>
         </div><hr/>
         <div className="card-footer">
         <i className="fa fa-edit"  href="" style={{display:"inlineFlex",fontSize:"13px",marginLeft: "20px"}}>edit propfile</i> <br/><br/>
         <i className="fa fa-edit"  href="editprefer.html" style={{display:"inlineFlex",fontSize:"13px",marginLeft: "20px"}}>edit preferences</i> 
        </div><br/>
    
    </div>
    <div className="right-box">
    <div className="container">
      <div className="row" >
    <div className="col-md-4">
    <div className="mains">
        <div className="imagee">
            <div className="imgg">
            <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
        </div>
           <p>Name</p>
                <p>Age</p>
                <p>Height</p>
                <button type="button" className="btn btn-outline-warning" style={{width:" fitContent",marginLeft:"10px"}}>viewmore</button>
        </div></div></div>
        <div className="col-md-3"style={{marginRight:"10px"}}>
        <div className="mains">
            <div className="imagee">
                <div className="imgg">
                <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
            </div>
               <p>Name</p>
                    <p>Age</p>
                    <p>Height</p>
                    <button type="button" className="btn btn-outline-warning" style={{width: "fitContent",marginLeft:"70px"}}>viewmore</button>
            </div></div></div>
            <div className="col-md-1"></div>
            <div className="col-md-3" style={{marginRight:"10PX"}}>
            <div className="mains">
                <div className="imagee">
                    <div className="imgg">
                    <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                </div>
                   <p>Name</p>
                        <p>Age</p>
                        <p>Height</p>
                        <button type="button" className="btn btn-outline-warning" style={{width:" fitContent",marginLeft:"70px"}}>viewmore</button>
                </div></div></div>
                <div className="col-md-1"></div>
        </div>
                
            <div className="row" >
                      
                        <div className="col-md-3" >
                        <div className="mains">
                            <div className="imagee">
                                <div className="imgg">
                                <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                            </div>
                               <p>Name</p>
                                    <p>Age</p>
                                    <p>Height</p>
                                    <button type="button" className="btn btn-outline-warning" style={{width:" fitContent",marginLeft:"70px"}}>viewmore</button>
                            </div></div></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                            <div className="mains">
                                <div className="imagee">
                                    <div className="imgg">
                                    <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                                </div>
                                   <p>Name</p>
                                        <p>Age</p>
                                        <p>Height</p>
                                        <button type="button" className="btn btn-outline-warning" style={{width: "fitContent",marginLeft:"70px"}}>viewmore</button>
                                </div></div></div>
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                <div className="mains">
                                    <div className="imagee">
                                        <div className="imgg">
                                        <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                                    </div>
                                       <p>Name</p>
                                            <p>Age</p>
                                            <p>Height</p>
                                            <button type="button" className="btn btn-outline-warning" style={{width:" fitContent",marginLeft:"70px"}}>viewmore</button>
                                    </div></div></div>
                                    <div className="col-md-1"></div>
            </div>
    
           <div className="row" >
                      
                                        <div className="col-md-3" >
                                        <div className="mains">
                                            <div className="imagee">
                                                <div className="imgg">
                                                <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                                            </div>
                                               <p>Name</p>
                                                    <p>Age</p>
                                                    <p>Height</p>
                                                    <button type="button" className="btn btn-outline-warning" style={{width: "fitContent",marginLeft:"70px"}}>viewmore</button>
                                            </div></div></div>
                                            <div className="col-md-1"></div>
                                            <div className="col-md-3">
                                            <div className="mains">
                                                <div className="imagee">
                                                    <div className="imgg">
                                                    <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                                                </div>
                                                   <p>Name</p>
                                                        <p>Age</p>
                                                        <p>Height</p>
                                                        <button type="button" className="btn btn-outline-warning" style={{width: "fitContent",marginLeft:"70px"}}>viewmore</button>
                                                </div></div></div>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-3">
                                                <div className="mains">
                                                    <div className="imagee">
                                                        <div className="imgg">
                                                        <img src="https://images.unsplash.com/photo-1505279340786-1e3b097e227a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=268&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTcwODE0NDEwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=348" alt="" height="150px"/>
                                                    </div>
                                                       <p>Name</p>
                                                            <p>Age</p>
                                                            <p>Height</p>
                                                            <button type="button" className="btn btn-outline-warning" style={{width: "fitContent",marginLeft:"70px"}}>viewmore</button>
                                                    </div></div></div>
                                                    <div className="col-md-1"></div>
                        </div>
        
      </div>
    </div>
      <br/>
      <div style={{marginTop:'80vw',backgroundColor:"greenyellow",height:"60px",display:"flex",
      justifyContent:"center",alignItems:"center"}}>
      <PaginationComponent />
      </div>
        
  </div>
    )
}
export default Editpreferences