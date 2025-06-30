export const loginService = async ({ email, password }) => {
  const response = await fetch('https://api.escuelajs.co/api/v1/users');
  if (!response.ok) throw new Error('Error al conectar con el servidor');
  const users = await response.json();

  const user = users.find(u => u.email === email);
  if (!user) throw new Error('Usuario no encontrado');
  // Aquí podrías validar la contraseña si la API la retorna (no recomendado en frontend)
  return user;
};
