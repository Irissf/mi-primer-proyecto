import Head from 'next/head'
import styles from '../styles/Layout.module.css'

//{children} => props.children
export default function Layout({children, title, description}) {
  return (
    <div className={styles.container}>

        <Head>
            <title>{title}</title>
            <meta name='description'
            content={description}
            />
        </Head>

        <nav>
            navbar
        </nav>

        <main>
            {children}
        </main>

        <footer>
            footer
        </footer>
    </div>
  )
}

//por defecto por si no mandamos los props
Layout.defaultProps = {
    title : "Next.js | mi sitio web",
    description : "Descripción de mi sitio web"
}
