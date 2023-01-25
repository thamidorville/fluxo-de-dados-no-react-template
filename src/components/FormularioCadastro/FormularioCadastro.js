import { FormContainer, Form, Input, StyledLabel } from "./styled";
import { useState } from "react";

export const FormularioCadastro = ({urlFoto,
  setUrlFoto,
  descricao,
  setDescricao,
  titulo,
  setTitulo}) => {


//criando a função que vai lidar com o Input
const handleInput = (e) => {
  setUrlFoto(e.target.value)
}
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={urlFoto} onChange={handleInput}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao}
          //chamando o setEstado direto no onChange
          onChange={(e) => setDescricao(e.target.value)}
          /> 
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
        <Input id="titulo" value={titulo}
         onChange={(e) => setTitulo(e.target.value)} //evento sobe e dados descem
         /> 
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro