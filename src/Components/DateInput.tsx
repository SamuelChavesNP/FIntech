import React from 'react'

type iDateInput = React.ComponentProps<'input'> & { 
  label: string;
}

const LabelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-3)",
  borderRadius: "var(--gap)",
}

const InputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-5)",
  borderRadius: "var(--gap)",
}

const DateInput = ({label, ...props}:iDateInput) => {
  return (
    <div>
      <label style={LabelStyle} htmlFor={label}>{label}</label>
      <input style={InputStyle} type="date" id={label} name={label} {...props}/>
    </div>
  )
}

export default DateInput