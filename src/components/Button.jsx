/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <a href="https://forms.gle/PLshAPqUrbSHQkxk6"> 
    <button className={`bg-primary px-10 py-2.5 rounded-md text-white border-primary border-[1px] hover:border-white ${props.className}`}>{props.children}</button>
    </a>
  )
}

export default Button