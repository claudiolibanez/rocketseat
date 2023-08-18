export default function Files() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Arquivos</h1>

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-end border-b border-zinc-200 pb-5">
          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Novo arquivo
          </button>
        </div>
      </div>
    </>
  )
}
