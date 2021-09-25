import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPorta, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"

export default function Jogo() {
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    // Altera o valor do estado sempre que os parametros da rota são atualizados
    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    // Define o estado "valido" para falso quando os valores informados são inválidos
    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdPortasValidas = (portas >= 3 && portas <= 100)
        const temPresenteValido = (temPresente >= 1 && temPresente <= portas)
        const valoresSaoValidos = qtdPortasValidas && temPresenteValido

        setValido(valoresSaoValidos)

    }, [portas, router.query.portas, router.query.temPresente])

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
                {valido ?
                    renderizarPortas() :
                    <h1>Valores inválidos</h1>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>
                        Reiniciar Jogo
                    </button>
                </Link>
            </div>
        </div >
    )
}