import React ,{useRef}from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export const Cube = () => {
    const textref = useRef()
    useFrame((state)=> (textref.current.position.x = Math.sin(state.clock.elapsedTime)*2))
  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0,0,5]} />
                <color attach="background" args={['pink']} />
                <Text ref={textref} fontSize={1} color="#555">
                    hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}
