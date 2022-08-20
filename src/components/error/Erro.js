import { BsXCircleFill} from 'react-icons/bs'

import { Error } from './style'

function Erro(){
    return (
        <Error>
            <span>
                <BsXCircleFill/>
            </span>
            Houve um erro aqui!
        </Error>
    )
}

export default Erro
