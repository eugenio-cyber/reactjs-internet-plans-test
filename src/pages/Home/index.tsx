import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import "./styles.css";
import { useState } from "react";

const Home = () => {
  const [warning, setWarning] = useState(false);
  const [cep, setCep] = useState(0);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setWarning(false);

    if (cep.toString().length !== 8) {
      setWarning(true);
    }
  };

  return (
    <div className='container'>
      <div className='home'>
        <Header />
        <section className='home__action'>
          <div className='home__form'>
            <form
              className='form'
              action=''
              onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
            >
              <label className='form__label' htmlFor='cep'>
                Para consultar as ofertas digite seu CEP
              </label>
              {warning && <span className='form__warning'>Cep inválido</span>}
              <input
                className='form__input'
                id='cep'
                type='number'
                placeholder='Ex: 37531280'
                onChange={(e) => setCep(Number(e.target.value))}
                required
              />
              <Button text='Entrar' />
            </form>
          </div>
          <div className='home__welcome'>
            <h1 className='home__title'>Seja bem-vindo</h1>
            <span className='home__paragraph'>
              Aqui nós oferecemos os mais variados planos de internet para você
              aproveitar.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
