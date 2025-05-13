import { ref } from 'vue'
import { loginApi } from '@/api/auth'

export function useAuth() {
  const token = ref('')
  const error = ref('')
  const loading = ref(false)

  const login = async (email, password) => {
    loading.value = true
    error.value = ''
    try {
      const result = await loginApi(email, password)
      token.value = result.token
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { token, error, loading, login }
}
