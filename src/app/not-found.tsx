import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full lg:h-163.75 flex flex-col items-center justify-center">
      <h1 className="text-center font bold mt-9 text-6xl">404</h1>
      <div className="text-center mt-4">
        <p>Oops, não consegui encontrar essa página</p>
        <span>
          Clique no botão abaixo para ser redirecionado à Página Principal
        </span>
      </div>
      <Link href="/">
        <span className="underline text-blue-500 hover:text-blue-700 mt-4 cursor-pointer">
          Ir para a Página Inicial
        </span>
      </Link>
    </div>
  );
}
