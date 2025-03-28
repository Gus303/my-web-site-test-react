import { MeshDistortMaterial, Sphere } from "@react-three/drei";
function Shape() {
    return(
        <>
        <Sphere args={[1, 100, 200]} scale={2.7}>
          <MeshDistortMaterial
            color="#006DE1"
            attach="material"
            distort={0.6}
            speed={2}
          />
        </Sphere>
        <ambientLight intensity={2} />
        <directionalLight position={[1, 2, 3]} />
      </>
    )
}

export default Shape