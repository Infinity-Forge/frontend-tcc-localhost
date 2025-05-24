import Link from 'next/link'
 
function NotFound() {
  return (
    <div>
      <h2>PÁGINA NÃO ENCONTRADA</h2>
      <p>Por favor retorne para a homepasge:</p>
      <Link href="/">Voltar para Homepage!</Link>
    </div>
  )
}

export default NotFound