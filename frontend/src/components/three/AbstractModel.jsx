import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function AbstractModel({ mouse }) {
  const group = useRef();
  const dotsRef = useRef([]);

  // Precompute orbiting dot parameters
  const dots = useMemo(() => {
    const colors = ["#06b6d4", "#7c3aed", "#f59e0b"];
    return Array.from({ length: 22 }).map(() => ({
      radius: 1.5 + Math.random() * 0.6,
      incl: (Math.random() - 0.5) * Math.PI * 0.6,
      speed: 0.6 + Math.random() * 1.2,
      angle: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 0.04 + Math.random() * 0.06,
    }));
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x = 0, y = 0 } = mouse.current || {};

    // smooth rotation towards mouse
    group.current.rotation.y += (x - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (y - group.current.rotation.x) * 0.06;

    // update dot positions
    dots.forEach((d, i) => {
      d.angle += d.speed * delta * 0.7;
      const px = Math.cos(d.angle) * d.radius;
      const pz = Math.sin(d.angle) * d.radius;
      const py = Math.sin(d.incl) * 0.6;
      const node = dotsRef.current[i];
      if (node) node.position.set(px, py, pz);
    });

    // subtle continuous rotation
    group.current.rotation.z += 0.005 * delta;
  });

  return (
    <group ref={group}>
      {/* Globe */}
      <mesh>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial color="#0b1220" metalness={0.25} roughness={0.35} emissive="#021225" />
      </mesh>

      {/* Rings / orbital lines */}
      <mesh rotation={[0.4, 0.2, 0]}>
        <torusGeometry args={[1.25, 0.003, 16, 200]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.18} />
      </mesh>
      <mesh rotation={[-0.6, 0.35, 0]}>
        <torusGeometry args={[1.4, 0.003, 16, 200]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.14} />
      </mesh>
      <mesh rotation={[0.2, -0.6, 0]}>
        <torusGeometry args={[1.55, 0.003, 16, 200]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.12} />
      </mesh>

      {/* Orbiting dots */}
      {dots.map((d, i) => (
        <mesh key={i} ref={(el) => (dotsRef.current[i] = el)}>
          <sphereGeometry args={[d.size, 8, 8]} />
          <meshStandardMaterial emissive={d.color} color={d.color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}
