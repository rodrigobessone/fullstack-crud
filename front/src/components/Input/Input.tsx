import { ForwardedRef, forwardRef, useState } from "react"
import { StyledInputContainer } from "./StyledInputContainer";
import { formatPhoneNumberInput } from "../../utils/utils";
import { IInputProperties } from "../../providers/UserContext/ContactContext.tsx/@types";

export const Input = forwardRef(({ label, error, type, isPhoneNumber, ...rest}: IInputProperties, ref: ForwardedRef<HTMLInputElement>) => {
    const [inputValue, setInputValue] = useState('')

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedValue = isPhoneNumber
          ? formatPhoneNumberInput(value)
          : value;
        setInputValue(formattedValue);
      };

    return(
        <StyledInputContainer>
        {label && <label>{label}</label>}
          <input ref={ref} type={type} {...rest} onChange={handleTextChange} value={inputValue}/>
        {error && <p>{error.message}</p>}
      </StyledInputContainer>
    );
  });