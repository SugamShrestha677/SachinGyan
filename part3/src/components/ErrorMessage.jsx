// components/ErrorMessage.jsx
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <i className="fas fa-exclamation-circle text-red-400"></i>
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">
            {message || 'An error occurred. Please try again later.'}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 text-sm text-red-700 underline"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage