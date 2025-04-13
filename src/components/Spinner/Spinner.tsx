import { Process, SpinnerComponent, Wrapper } from "./styles";

function Spinner() {
  return (
    <Wrapper>
      <SpinnerComponent></SpinnerComponent>
      <Process>Loading . . .</Process>
    </Wrapper>
  );
}

export default Spinner;