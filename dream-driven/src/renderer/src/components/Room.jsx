import { Canvas } from '@react-three/fiber'
import { MotionConfig } from 'framer-motion'
import { Leva } from 'leva'
import { useEffect, useState } from 'react'
import { framerMotionConfig } from '../config'
import { Experience } from './Experience'

function Room() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={['#e6e7ff']} />

          <Experience section={section} menuOpened={menuOpened} />
        </Canvas>
      </MotionConfig>
      <Leva hidden />
    </>
  )
}

export default Room
