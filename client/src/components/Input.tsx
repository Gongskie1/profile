import { CustomInputType } from "../types"

const Input = ({
    inputTitle,
    inputName,
    inputClass
}:CustomInputType
) => {
  return (
    <>
        <div className={`p-[4px_6px] ${inputClass}`}>
            <p className="py-2 px-[6px] font-medium">{inputTitle}</p>
            <input type="text" name={inputName} className="p-[4px_6px] w-full outline-none rounded-md" placeholder={inputTitle}/>
        </div>
    </>
  )
}

export default Input