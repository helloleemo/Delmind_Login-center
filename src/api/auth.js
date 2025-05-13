export async function loginApi(email, password) {
  const res = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Login error:', err)
    throw new Error('Login failed!!')
  }

  return await res.json()
}
