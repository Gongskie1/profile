import { CustomButtonTypes } from "../types"

const Button = ({
btnName,
btnClass,
}:CustomButtonTypes
) => {
  return (
    <>
      <div>
        <button 
          className={btnClass}
          >{btnName}
        </button>
      </div>
    </>
  )
}

export default Button