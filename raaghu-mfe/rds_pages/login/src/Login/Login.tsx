import React, { Suspense } from "react";
import { ValidateTenantName,trial, Authenticate, RootState, AppDispatch, useAppDispatch } from '../../../../libs/public.api'
import { IsTenantAvailableInput,TokenAuthServiceProxy,AuthenticateModel,AuthenticateResultModel } from '../../../../libs/public.api';
import { useSelector } from 'react-redux'
// import RdsCompLogin from '../../../../rds_components/src/login/rds-comp-login'
const RdsCompLogin = React.lazy (() => import("rds_components/RdscompLogin"));

// export interface Loginprops  {
//   onLogin : {email : string  , password : string}
// }
const Login = (props: JSX.IntrinsicAttributes | (JSX.IntrinsicAttributes & React.RefAttributes<React.Component<{}, any, any>>)) => {
	const dispatch = useAppDispatch();
	const authenticateModal = new AuthenticateModel();
	authenticateModal.userNameOrEmailAddress = 'admin';
	authenticateModal.password = 'raaghu123';
	const name:any = useSelector((state: RootState) => state.validateTenant.tenancyName);
	const accessToken:any = useSelector((state: RootState) =>state.validateTenant.accessToken);
	const loginHandler =(email?:string , password? : string)=>{
		dispatch(Authenticate(authenticateModal)).then(()=>console.log(accessToken))
		dispatch(ValidateTenantName('admin')).then(()=>console.log(name))	
		
    }

	
	return(	
		<div  style={{backgroundImage: "url(/body-backgroud.svg)"}}>
			<h1>{name}</h1>
			<h1>{accessToken}</h1>
		    <div className="align-items-center d-flex justify-content-center login m-auto" style={{width: 900, height: '100%'}} >
		      <div className="container-fluid m-2">
			    <div className="bg-white row rounded-3 " style={{height: 524}}>
			      <div className="col-md-6">
                     <div className="py-4 px-3">
                          <div className="pb-4">
				            <div  className="text-center">
					         <img src="raaghu_text_logo.svg"></img>
					        </div>
				         </div>					 
		                 <RdsCompLogin  onLogin = {loginHandler}/>
	                 </div>
			      </div>
						<div className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0" 
						   style={{  backgroundRepeat: "no-repeat" ,  backgroundColor: "#000" , height : 524}}>
         						
							<video className="video position-relative" autoPlay muted loop style={{width: 442 , height : 524}}>
								<source src = "building_lights.mp4" type="video/mp4"></source>
							</video>
							<img className="position-absolute" style={{zIndex: '3' ,  backgroundSize: "cover" , top: 240 , left:196,width:50, height:50}} src="raaghu_icon.png"></img>
							
							
			            </div>	

			    </div>
		      </div>
		    </div>
		</div>


	)
};

export default Login;