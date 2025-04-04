import React, { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Physics, RigidBody, BallCollider, CylinderCollider } from "@react-three/rapier";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in Canvas:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-fallback">3D view failed to load</div>;
    }
    return this.props.children;
  }
}

const SphereGeo = ({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
  onPointerEnter,
  onPointerLeave
}) => {
  const api = useRef(null);
  const [hovered, setHovered] = useState(false);
  const impulseStrength = useRef(0);

  useFrame((_state, delta) => {
    if (!api.current) return;
    
    delta = Math.min(0.1, delta);
    
    // Smoothly adjust impulse strength based on hover state
    impulseStrength.current = hovered 
      ? Math.min(impulseStrength.current + delta * 5, 100)
      : Math.max(impulseStrength.current - delta * 5, 50);
    
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiplyScalar(-impulseStrength.current * delta * scale);
    
    api.current.applyImpulse(impulse, true);
    
    // Add a small random movement to keep balls visible
    if (!hovered && Math.random() < 0.05) {
      const smallImpulse = vec
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .multiplyScalar(5 * delta * scale);
      api.current.applyImpulse(smallImpulse, true);
    }
  });

  const handlePointerEnter = () => {
    setHovered(true);
    if (onPointerEnter) onPointerEnter();
  };

  const handlePointerLeave = () => {
    setHovered(false);
    if (onPointerLeave) onPointerLeave();
  };

  return (
    <RigidBody
      linearDamping={0.5}  // Reduced damping for more movement
      angularDamping={0.1}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={new THREE.SphereGeometry(1, 28, 28)}
        material={material}
        rotation={[0.3, 1, 1]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    </RigidBody>
  );
};

const TechStack = () => {
  const textureLoader = new THREE.TextureLoader();
  const imageUrls = [
    "/images/react2.webp",
    "/images/ph.jpg",
    "/images/node2.webp",
    "/images/express.webp",
    "/images/mongo.webp",
    "/images/mysql.webp",
    "/images/tailwind3.png",
    "/images/javascript.webp",
    "/images/bootstrap.jpg",
    "/images/html.jpg",

  ];
  
  const textures = useMemo(() => 
    imageUrls.map((url) => {
      const texture = textureLoader.load(
        url,
        undefined,
        undefined,
        (error) => console.error('Error loading texture:', url, error)
      );
      return texture;
    }), 
    []
  );

  const spheres = useMemo(() => 
    [...Array(30)].map(() => ({
      scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
    })), 
    []
  );

  const [isActive, setIsActive] = useState(false);
  const [cursorSize, setCursorSize] = useState(10);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      if (!workSection) return;
      
      const threshold = workSection.getBoundingClientRect().top;
      setIsActive(window.scrollY > threshold);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.querySelectorAll(".header a").forEach((elem) => {
      elem.addEventListener("click", () => {
        const interval = setInterval(handleScroll, 10);
        setTimeout(() => clearInterval(interval), 1000);
      });
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, [textures]);

  const handlePointerEnter = () => {
    setCursorSize(20);
  };

  const handlePointerLeave = () => {
    setCursorSize(10);
  };

  return (
    <div className="techstack" style={{ 
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      cursor: 'none'
    }}>
      {/* HTML-based background text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        color: 'rgba(255, 255, 255, 0.1)',
        fontSize: '10vw',
        fontWeight: 'bold',
        pointerEvents: 'none',
        whiteSpace: 'nowrap'
      }}>
        TECH STACK
      </div>
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2
      }}>
        <ErrorBoundary>
          <Canvas
            shadows
            camera={{ position: [0, 0, 20], fov: 32.5 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={1} />
            <spotLight position={[20, 20, 25]} intensity={2} />
            
            <Physics gravity={[0, 0, 0]}>
              {spheres.map((props, i) => (
                <SphereGeo 
                  key={i}
                  {...props}
                  material={materials[i % materials.length]}
                  isActive={true}
                  onPointerEnter={handlePointerEnter}
                  onPointerLeave={handlePointerLeave}
                />
              ))}
            </Physics>
            
            <Environment preset="city" />
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Custom cursor */}
      <div style={{
        position: 'fixed',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
        zIndex: 1000,
        transition: 'width 0.2s ease, height 0.2s ease',
        boxShadow: `
          0 0 10px 3px rgba(249, 203, 40, 0.8),
          0 0 20px 5px rgba(249, 203, 40, 0.5)
        `
      }} />
    </div>
  );
};

export default TechStack;