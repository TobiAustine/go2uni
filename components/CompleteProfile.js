import React, {useState} from 'react'
import styles from '../styles/CompleteProfile.module.css'

const CompleteProfile = () => {

    // const [name, setName] = useState('')
    // const onChange = (e) => {
    //     setName(e.target.value)
    // }

    const [form, setForm] = useState({
        name:'',
        email:'',
        school:'',
        department:''
    })

    const onChange = (e) => {
        setForm(e.target.value)
    }

    const onSubmit = (e) => {
       e.preventDefault()
    }





  return (

    

    <div className={styles.completeprofile}>
        
        <h2>Please Complete Your Profile.</h2>

        <div className={styles.profileform_container}>
            <form action="" type='sumbit' onSubmit={onSubmit} >


            <div className={styles.full_name}>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" name='fullName' value={form.name} onChange={onChange} required/>  
            </div>

            <div className={styles.email}>
              <label htmlFor="email">Email Address</label>
              <input type="email" name='email' value={form.email} onChange={onChange} required/>  
            </div>

          

            <div className={styles.school}>
              <label htmlFor="school">School</label>
              <input type="text" name='school' value={form.school} onChange={onChange} required/>  
            </div>

            <div className={styles.dept}>
              <label htmlFor="department">Department</label>
              <input type="text" name='department' value={form.department} onChange={onChange}  required/>  
            </div>

           

           

         

            <div className={styles.gender}>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="" placeholder='Please select one' required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <button type="submit">Save</button>
            </form>
        </div>
    </div>
  )
}

export default CompleteProfile