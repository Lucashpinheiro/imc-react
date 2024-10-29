import { useState } from 'react';
import './form.css';

const Form = () => {
  let [peso, setpeso] = useState(0);
  let [altura, setaltura] = useState(0);
  const imc = parseFloat(peso / (altura* altura)).toFixed(1);

  const renderizaResultado = () => {
    if (imc <= 18.5) {
      return (
        <>
        <p className='form-item--text'>Seu icm é {imc}</p>
        <p className='form-item--text'>Abaixo do peso normal</p>
        </>
      )
    }if (imc <= 24.9) {
      return (
        <>
        <p className='form-item--text'>Seu icm é {imc}</p>
        <p className='form-item--text'>Peso normal</p>
        </>
      )
    }if (imc <= 29.9) {
      return (
        <>
        <p className='form-item--text'>Seu icm é {imc}</p>
        <p className='form-item--text'>Excesso de Peso</p>
        </>
      )
    }if (imc <= 34.9) {
      return (
        <>
        <p className='form-item--text'>Seu icm é {imc}</p>
        <p className='form-item--text'>Obesidade classe I</p>
        </>
      )
    }if (imc <= 39.9) {
      return (
        <>
        <p className='form-item--text'>Seu icm é {imc}</p>
        <p className='form-item--text'>Obesidade classe II</p>
        </>
      )
    }if (imc >=40.0) {
      return (
        <>
        <p className='form-item--text'>Seu icm é {imc}</p>
        <p className='form-item--text'>Obesidade classe III</p>
        </>
      )
    }else {
      return (
        <p className='form-item--text'>Preencha o formulário e calcule seu imc</p>
      )
    }
  }

  return(
    <div className='container'>
      <form className='form'>
    <label htmlFor="altura" className='form-item'>Altura em metros</label>
    <input type="number" id='altura' placeholder='Exemplo: 1.70' onChange={evento=> setaltura(evento.target.value)} />
    <label htmlFor="peso" className='form-item'>Peso em quilos</label>
    <input type="number" id='peso' placeholder='Exemplo 53.5' onChange={evento=> setpeso(evento.target.value)} />
    {renderizaResultado()}
      </form>
    </div>

  )
}

export default Form;
