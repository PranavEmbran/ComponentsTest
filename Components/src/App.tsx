import { useState } from 'react'
import SectionHeading from './Components/SectionHeading'
import ButtonWithGradient from './Components/ButtonWithGradient'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
    const buttonText = count > 0 ? "Submitted" : "Submit";

  return (
    <>
      <SectionHeading title="Dashboard" subtitle="Overview and quick stats for dialysis management" />

      {/* Using text prop  */}
      {/* <ButtonWithGradient text={buttonText} /> */}
      {/* <ButtonWithGradient text="Submit" /> */}
      <ButtonWithGradient text={count > 0 ? "Submitted" : "Submit"} />

    </>
  )
}

export default App
