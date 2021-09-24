import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPorta, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"

export default function Jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState([])

    // Altera o valor do estado sempre que os parametros da rota são atualizados
    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return (
                <Porta
                    key={porta.numero}
                    value={porta}
                    // Passando uma função na proprieda onChange que, sempre que chamada, gera um novo array de portas e atualiza o estado com esse array
                    onChange={novaPorta => setPortas(atualizarPorta(portas, novaPorta))}
                />
            )
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>
                        Reiniciar Jogo
                    </button>
                </Link>
            </div>
        </div >
    )
}