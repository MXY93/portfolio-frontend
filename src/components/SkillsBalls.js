import '../styles/skillsBalls.scss';
import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei';
import CanvasLoader from './Loader';
import { technologies } from '../constants/index';
import { useTranslation } from 'react-i18next';

const Ball = (props) => {
    // Load the texture using useTexture from drei
    const [decal] = useTexture([props.imgUrl]);
  
    // Return a mesh with an icosahedronGeometry
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.1, 0.1]}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          {/* Add a Decal component to the mesh, using the loaded texture */}
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    );
  };

const BallCanvas = ({ icon }) => {
    return (
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Add OrbitControls to allow for rotating the Ball */}
          <OrbitControls enableZoom={false} />
          {/* Render the Ball component, passing the icon prop as the texture URL */}
          <Ball imgUrl={icon} />
        </Suspense>
  
        {/* Use Preload from drei to preload all assets */}
        <Preload all />
      </Canvas>
    );
  };

  export default function SkillsBalls() {
    // Returning a flex container with each technology rendered as a BallCanvas component
    const { t } = useTranslation();

    return (
      <section className='skillsballs--section'>
        <div className='skillsballs--section-h2-n-p'>
          <h2>{t("section_title__skills")}</h2>
          <p className='skills_hover_prg'>({t("section_title__skill_name")})</p>
        </div>
        <div className="skillsballs--container">
          {technologies.map((technology) => (
            <div className="skillsballs--ball" key={technology.name} title={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </section>
    );
};

// Copyright (c) [2022] [Jorge Zamora] //