export default function RideRequest() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Solicitar Corrida</h2>
      <input className="mb-2 p-2 border rounded" placeholder="Destino" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Solicitar</button>
    </div>
  )
}
