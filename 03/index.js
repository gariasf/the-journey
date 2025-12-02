import * as THREE from "three";

console.log(THREE);

// Scene
const scene = new THREE.Scene();

// Object
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(cube, material);
scene.add(mesh);
