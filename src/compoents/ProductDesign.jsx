import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { styled } from 'styled-components'
import React from 'react'
import Shoe from './Shoe'

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    bottom: 100px;
    right: 100px;

    @media only screen and (max-width:768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`

export const ProductDesign = () => {
  return (
    <>
    <Canvas>
    <Stage enviroment ="city" intensity = {0.5}>
       <Shoe/>
    </Stage>
   <OrbitControls enableZoom={false} />
   </Canvas>
   <Desc>
    We design products with a strong focus on both world class design and
    ensuring your product is a market success.
    </Desc>
    </>
  )
}

export default ProductDesign