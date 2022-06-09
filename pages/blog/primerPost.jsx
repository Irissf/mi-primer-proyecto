import Link from 'next/link'
import React from 'react'


//imagen
import Image from 'next/image'


export default function primerPost() {
  return (
    <div>

  

      {/* Para navegaciones usamos Link, rodeando al ancla <a>, si hacemos referencias
      a páginas externas llega con solo la <a>*/}
      <Link href="/"><a>Volver al inicio</a></Link>
      <Image src="/img/906-600x600.jpg" width={600} height={600} alt="iamgen"></Image>
    </div>
  )
}
