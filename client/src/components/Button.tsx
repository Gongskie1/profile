import { CustomButtonTypes } from "../types"

const Button = ({
btnName,
btnClass,
btnType
}:CustomButtonTypes
) => {
  return (
    <>
      <div>
        <button 
          className={btnClass}
          type={btnType}
          >{btnName}
        </button>
      </div>
    </>
  )
}

export default Button