import CardProduct from './components/cardProduct/CardProduct';
import ContainerProducts from './components/containerProducts/ContainerProducts';

const App = () => {
  return (
    <div className='product'>
      <h2 className='title'>¡Hola desde App!</h2>
      <CardProduct title='Producto molón' />
    </div>
  );
};

export default App;
