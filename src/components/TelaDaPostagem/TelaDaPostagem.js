import React from 'react'
import { Input } from '../FormularioCadastro/styled'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Image src={props.urlFoto} alt='drone view'/>
            <Description>{props.descricao}</Description>
            <h2>{props.titulo}</h2>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem