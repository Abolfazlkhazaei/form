import React ,{useState , useEffect} from 'react';
import { validate } from "./validate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast";
import styles from "./SingUp.module.css"
const SingUp = () => {
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
        setErrors(validate(data , "singup"))
        console.log(errors)
    },[data , touch])
    const focushandler = event=> {

        setTouch({...touch, [ event.target.name ]: true})
    }
    const submithandler = event=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
           notify("You Singed up succesfully","succes")
        }else{
            notify("Invalid data!" , "error")
            setTouch({
                name:true,
                email : true,
                password:true,
                confrimpassword : true,
                isAccept: true
            })
        }
        
    }
  
    return (
        <div className={styles.container}>
            <form onSubmit={submithandler} className={styles.formcontainer}>
                <h2 className={styles.header}>Sing Up</h2>
                <div className={styles.formField }>
                    <label>Name</label>
                    <input
                     className={(errors.name && touch.name) ? styles.uncompleted : styles.formInput
                    }
                    type="text" name='name' value={data.name} onChange={Changehandler} onFocus={focushandler} />
                    {errors.name && touch.name &&<span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField }>
                    <label>Confrimpassword</label>
                    <input
                     className={(errors.confrimpassword && touch.confrimpassword) ? styles.uncompleted : styles.formInput
                     }
                    type="password" name='confrimpassword' value={data.confrimpassword} onChange={Changehandler} onFocus={focushandler} />
                    {errors.confrimpassword && touch.confrimpassword && <span>{errors.confrimpassword}</span>}
                </div>
                <div className={styles.formField }>
                   <div className={styles.checkBoxContainer}>
                   <label>I accept terms of privacy policy </label>
                    <input
                    type="checkbox" name='isAccept' value={data.isAccept} onChange={Changehandler} onFocus={focushandler} />
                    {errors.isAccept && touch.isAccept && <span>{errors.isAccept}</span>}
                   </div>
                </div>
                <div className={styles.formbuttons}>
                    <a href="#">Login</a>
                    <button type="submit">Sing Up</button>
                </div>
            </form>
            <ToastContainer />
            
        </div>
    );
};

export default SingUp;