// src/pages/Home.tsx

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/reducers/counterSlice'; // Importando as ações
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useLorem } from '../../hooks/useLorem';
import './index.css';

function Home() {
  const count = useSelector(
    (state: { counter: { counter: number } }) => state.counter.counter,
  );
  const dispatch = useDispatch();

  const { text, loading, error } = useLorem();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h1>Texto Lorem Ipsum</h1>
        <p>{text}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}

export default Home;
