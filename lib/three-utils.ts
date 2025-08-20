import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to black
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

// Function to create a light
export const createLight = () => {
    const light = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light
    return light;
};

// Function to create a mesh
export const createMesh = (geometry: THREE.Geometry, material: THREE.Material) => {
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) => {
    const animateLoop = () => {
        requestAnimationFrame(animateLoop);
        renderer.render(scene, camera); // Render the scene
    };
    animateLoop();
}; 

export default { createScene, createCamera, createRenderer, createLight, createMesh, animate };