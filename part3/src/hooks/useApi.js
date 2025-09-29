// hooks/useApi.js
import useSWR from 'swr'

// SWR fetcher
const fetcher = (apiFunction, ...args) => apiFunction(...args)

export const useSwrApi = (key, apiFunction, options = {}) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    key,
    () => fetcher(apiFunction, ...(options.args || [])),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
      ...options
    }
  )

  return {
    data,
    loading: isLoading,
    error,
    isValidating,
    mutate
  }
}

// Legacy hook for backward compatibility
const useApi = (apiFunction, immediate = true) => {
  const { data, loading, error, mutate } = useSwrApi(
    immediate ? [apiFunction.name] : null,
    apiFunction
  )

  const execute = async (...args) => {
    return mutate(() => apiFunction(...args), {
      revalidate: false
    })
  }

  return { data, loading, error, execute }
}

export default useApi