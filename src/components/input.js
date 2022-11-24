import { FormInput, FormInputContainer, FormLabel } from "../styles/input";

export function Input({id, name, type="text", value, onChange, label, icon}) {
  return(
    <div>
      <FormLabel htmlFor={id || name}>{label}</FormLabel>
      <FormInputContainer>
        {icon}
        <FormInput
          type={type}
          name={name}
          id={id || name}
          value={value}
          onChange={onChange}
        />
      </FormInputContainer>
    </div>
  )
}