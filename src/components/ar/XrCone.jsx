import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function XrCone(){

    const coneRef=useRef();
    useFrame((state, delta) => {
        coneRef.current.rotation.y += delta;
    
    });



    return (<>
        <OrbitControls />
        <ambientLight />
        <mesh ref={coneRef} position={[0, -3, -5]}>
            <coneGeometry args={[ 2, 5, 2]}/>
            <meshStandardMaterial color='red' />
        </mesh>
         
    
        </>
    
    )
    }
    export default XrCone;