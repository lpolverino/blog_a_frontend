const Input = ({name, value, setValue, type}) => {
  return (
    <div>
        <label htmlFor={name}>{name}</label>
        <input
            id={name}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            type={type}>
        </input>
    </div>
  )
}

export default Input