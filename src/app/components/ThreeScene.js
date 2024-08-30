'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../../assets/img/stars.jpg';
import sunTexture from '../../assets/img/sun.jpg';
import mercuryTexture from '../../assets/img/mercury.jpg';
import venusTexture from '../../assets/img/venus.jpg';
import earthTexture from '../../assets/img/earth.jpg';
import marsTexture from '../../assets/img/mars.jpg';
import jupiterTexture from '../../assets/img/jupiter.jpg';
import saturnTexture from '../../assets/img/saturn.jpg';
import saturnRingTexture from '../../assets/img/saturn ring.png';
import uranusTexture from '../../assets/img/uranus.jpg';
import uranusRingTexture from '../../assets/img/uranus ring.png';
import neptuneTexture from '../../assets/img/neptune.jpg';
import plutoTexture from '../../assets/img/pluto.jpg';

const ThreeScene = () => {
  //   const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    
    const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    scene.add(cylinder);
    camera.position.z = 5;

    function animate() {

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);

    }





 //solarSystem
//  const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// const orbit = new OrbitControls(camera, renderer.domElement);
// camera.position.set(-90, 140, 140);
// orbit.update();

// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     starsTexture,
//     starsTexture,
//     starsTexture,
//     starsTexture,
//     starsTexture,
//     starsTexture
// ]);

// const textureLoader = new THREE.TextureLoader();

// const sunGeo = new THREE.SphereGeometry(16, 30, 30);
// const sunMat = new THREE.MeshBasicMaterial({
//     map: textureLoader.load(sunTexture)
// });

// const sun = new THREE.Mesh(sunGeo, sunMat);
// scene.add(sun);


// const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30);
// const mercuryMat = new THREE.MeshStandardMaterial({
//     map: textureLoader.load(mercuryTexture)
// });

// const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
// const mercuryObj = new THREE.Object3D();
// mercuryObj.add(mercury);
// scene.add(mercuryObj);
// mercury.position.x = 28;




// const saturnGeo = new THREE.SphereGeometry(10, 30, 30);
// const saturnMat = new THREE.MeshStandardMaterial({
//     map: textureLoader.load(saturnTexture)
// });

// const saturn = new THREE.Mesh(saturnGeo, saturnMat);
// const saturnObj = new THREE.Object3D();
// saturnObj.add(saturn);
// scene.add(saturnObj);
// saturn.position.x = 138;


// const saturnRingGeo = new THREE.RingGeometry(10, 20, 32);
// const saturnRingMat = new THREE.MeshBasicMaterial({
//     map: textureLoader.load(saturnRingTexture),
//     side: THREE.DoubleSide
// });

// const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat);
// saturnObj.add(saturnRing);
// saturnRing.position.x = 138;
// saturnRing.rotation.x = -0.5 * Math.PI;

// const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
// scene.add(pointLight);


//  function animate(){
//     sun.rotateY(0.004);
//     mercury.rotateY(0.004);
//     mercuryObj.rotateY(0.04);
//     saturn.rotateY(0.038);
//     saturnObj.rotateY(0.0009);
//     renderer.render(scene, camera);
//  }

//  renderer.setAnimationLoop(animate);

//  window.addEventListener('resize', function() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//  });



  }, []);
  return (
    <div></div>
  );
};
export default ThreeScene;