import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'

export default function Room() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        <Experience />
      </Canvas>
    </>
  )
}
