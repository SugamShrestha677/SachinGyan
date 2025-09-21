// components/Button.jsx
const Button = ({ 
  children, 
  className = '', 
  disabled = false,
  loading = false,
  type = 'button',
  ...props 
}) => {
  return (
    <button 
      type={type}
      disabled={disabled || loading}
      className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <i className="fas fa-spinner animate-spin mr-2"></i>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button