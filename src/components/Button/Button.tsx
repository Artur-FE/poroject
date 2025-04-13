import { MainButton } from './styles';
import { ButtonProps } from './types';


function Button({ name, onClick, disabled = false, type = 'submit', danger }: ButtonProps) {
  return (
    <MainButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      danger={danger}
    >
      {name}
    </MainButton>
  )
}


export default Button