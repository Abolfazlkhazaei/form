import React ,{useState , useEffect} from 'react';
import { validate } from "./validate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast";
import styles from "./SingUp.module.css"
const Login = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confrimpassword : "",
        isAccept : false
    })
    const Changehandler = event =>{
        if(event.target.name ==="isAccept"){
            setData({...data , [event.target.name] : event.target.checked})
        }else {
            setData({...data , [event.target.name] : event.target.value})
        }
    }
    const [errors , setErrors] = useState({});
    const [touch , setTouch] = useState({});
    useEffect(()=>{
        setErrors(validate(data , "login"))
        console.log(errors)
    },[data , touch])
    const focushandler = event=> {

        setTouch({...touch, [ event.target.name ]: true})
    }
    const submithandler = event=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
           notify("You Loged up succesfully","succes")
        }else{
            notify("Invalid data!" , "error")
            setTouch({
               
                email : true,
                password:true,
                
            })
        }
        
    }
  
    return (
        <div className={styles.container}>
            <form onSubmit={submithandler} className={styles.formcontainer}>
                <h2 className={styles.header}>Sing Up</h2>
                
                <div className={styles.formField }>
                    <label>email</label>
                    <input
                     className={(errors.email && touch.email) ? styles.uncompleted : styles.formInput
                     }
                    type="text" name='email' value={data.email} onChange={Changehandler} onFocus={focushandler} />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField }>
                    <label>password</label>
                    <input
                     className={(errors.password && touch.password) ? styles.uncompleted : styles.formInput
                     }
                    type="password" name='password' value={data.password} onChange={Changehandler} onFocus={focushandler} />
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>
              
                
                <div className={styles.formbuttons}>
                    <a href="#">Sing Up</a>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
            
        </div>
    );
};

export default Login;