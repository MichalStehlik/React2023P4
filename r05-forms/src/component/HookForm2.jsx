import { useForm, Controller } from "react-hook-form"

// https://react-hook-form.com/

export const HookForm2 = () => {
    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm(
        {defaultValues: {
        firstName: "Adam",
        lastName: "Bohatý",
        gender: "other",
        confirm: true
    }}
    )
    let {firstName, lastName} = getValues();
    const onSubmit = (data) => { alert(JSON.stringify(data))}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>{firstName} {lastName}</p>
        <div>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <input {...field} />}
            />
        </div>
        <div>
            <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
            />
            {errors.lastName && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="gender">Gender Selection</label>
          <Controller name="gender" control={control} render={({ field }) => 
            <select {...field}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>} />
        </div>
        <div>
          <label>Check <Controller name="confirm" control={control} render={({ field }) => 
            <input type="checkbox" {...field} />} /></label>
        </div>
        <input type="submit" />
        <button type="button" onClick={e => {setValue("firstName","Zoltán")}}>Set</button>
    </form>
    )
        
}

export default HookForm2;