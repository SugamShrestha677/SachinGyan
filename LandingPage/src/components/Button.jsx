const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700'
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button