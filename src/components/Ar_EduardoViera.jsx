import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { ARButton, XR, Controllers } from '@react-three/xr';
import Dashboard from './Dashboard';
function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf');
  return (
    <group {...props} dispose={null}>
      <group position={[0.18, -0.292, -0.004]} rotation={[Math.PI / 6, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.SolarCell}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Aluminium}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Aluminium}
        position={[0, -0.288, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload('/model.gltf');

function AR_EduardoViera() {
  return (
    <>
        <Dashboard /> 
      <ARButton />
      <Canvas>
        <XR>
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={<Html>Loading...</Html>}>
            <Model />
          </Suspense>
          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
}

export default AR_EduardoViera;