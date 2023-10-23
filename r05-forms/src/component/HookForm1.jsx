import {useForm} from "react-hook-form" 

export const HookForm1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {defaultValues: {
        firstName: "Adam",
        lastName: "Bohatý",
        gender: "other",
        confirm: true
    }}
    )
    const onSubmit = (data) => { alert(JSON.stringify(data))}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input defaultValue="Jaroslav" {...register("firstName")} />
        </div>
        <div>
            <input {...register("lastName", { required: true })} />
            {errors.lastName && <span>This field is required</span>}
        </div>
        <div>
          <label>Gender Selection</label>
          <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
          </select>
        </div>
        <div>
          <label>Check <input type="checkbox" {...register("confirm")}/></label>
        </div>
        <input type="submit" />
    </form>
    )
        
}

export default HookForm1;