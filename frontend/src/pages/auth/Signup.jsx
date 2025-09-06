export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      <input className="mb-2 p-2 border rounded" placeholder="Nome" />
      <input className="mb-2 p-2 border rounded" placeholder="Email" />
      <input className="mb-2 p-2 border rounded" placeholder="Senha" type="password" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Cadastrar</button>
    </div>
  )
}
