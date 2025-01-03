import { LabelInputProps } from "../utils/types"

function LabelInput({ type, placeholder, name, onChange, value}: LabelInputProps) {
    return (
        <div>
            <label htmlFor={name} className="block mb-1 text-sm font-medium text-black ">{name}</label>
            <input onChange={onChange} type={type || "text"} value={value} className=" border border-slate-800 focus:outline-none text-black text-sm rounded-lg block w-full p-2 bg-transparent placeholder:text-gray-700" placeholder={placeholder} required />
        </div>
    )
}

export default LabelInput