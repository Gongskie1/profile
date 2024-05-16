import React from "react"
import { CustomInputType } from "../types"

const Input: React.FC<CustomInputType> = ({
    inputTitle,
    inputClass,
    boilerPlate
}
) => {
  return (
    <>
        <div className={` ${inputClass}`}>
            <p className="py-2 px-[6px] font-medium">{inputTitle}</p>
            <input 
            type="text"
            className="p-[4px_6px] w-full outline-none rounded-md"  
            placeholder={inputTitle}
            {...boilerPlate}
            />
        </div>
    </>
  )
}

export default Input