import { useFormik } from "formik";



const Login = () => {

    const formik = useFormik({
        initialValues:{
            name: "",
            email: ""
        },
        validate: (values) => {
            let errors = {};
            //validation logic
            // values is an predefined object form formik which stores inital values
            //ceck the name is empty if it is then update with error msg 
            if(!values.name)
               errors.name = "Required"
            if(!values.email)
                errors.email = "Required"
            return errors
        },
        //will be called after validate errors has empty
        onSubmit: (values)=>{
            alert(JSON.stringify(values))
        }
    })

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form className="flex flex-col items-center"  onSubmit={formik.handleSubmit}>
                <div className="m-2">
                <label>Name : </label>
                <input className="focus ml-2 border border-black" type="text" name="name" value={formik.values.name} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {/* handlechange get the value 
                from e.target.value and upate the 
                state of value.name and 
                componeent re-render then update the ui */}
                {formik.touched.name && formik.errors.name? <div>{formik.errors.name}</div> :null}
                </div>
                <div className="m-2">
                <label>Email : </label>
                <input className="ml-3 border border-black" type="email" name="email" value={formik.values.email}
                onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email? <div>{formik.errors.email}</div> : null}
                </div>
                <button className="  bg-blue-600 text-white p-2 m-2 border border-blue-950"  type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                >Submit</button>
            </form>
            
        </div>
    )
}


export default Login;