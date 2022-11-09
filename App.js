import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei'

function App() {

  
  return (
    
    <Canvas background='black'>
      <Text
        color={"white"}
        scale={[10, 10, 10]}
        anchorX="top" // default
        anchorY="top" // default
      >
        HELLO WORLD
      </Text>
      <mesh>
        <sphereGeometry />
        <meshPhysicalMaterial />
      </mesh>
      <ambientLight intensity={0.5} />
    </Canvas>
    
  );

}

export default App;
