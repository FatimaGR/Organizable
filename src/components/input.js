export function Input({id, name, type="text", value, onChange, label}) {
  return(
    <div>
      <label htmlFor={id || name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}