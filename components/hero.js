import * as React from 'react';
import Model from './model';
import {Canvas, OrbitControls } from '@react-three/fiber';



export default function Hero({props}){
    /*
    React.useEffect(() => {
        let scene,  
        renderer,
        camera,
        model,                             
        neck,                               
        waist,                             
        possibleAnims,                     
        mixer,                            
        idle,                             
        clock = new THREE.Clock(),         
        currentlyAnimating = false,        
        raycaster = new THREE.Raycaster();
      
      init(); 
    
      function init() {
        
        const MODEL_PATH = 'https://stuff.us-southeast-1.linodeobjects.com/kevin.glb';
        const canvas = document.querySelector('#c');
        const backgroundColor = 0xf1f1f1;
        
        // Init the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(backgroundColor);
        scene.fog = new THREE.Fog(backgroundColor, 60, 100);
        
        // Init the renderer
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.shadowMap.enabled = true;
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);
        
        // Add a camera
        camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 30 
        camera.position.x = 0;
        camera.position.y = -3;
        
        let stacy_txt = new THREE.TextureLoader().load('https://stuff.us-southeast-1.linodeobjects.com/sup.jpg');
        stacy_txt.flipY = false;
    
        const stacy_mtl = new THREE.MeshPhongMaterial({
          map: stacy_txt,
          color: 0xffffff,
          skinning: true
        });
    
        
        var loader = new GLTFLoader();
    
        loader.load(
          MODEL_PATH,
          function(gltf) {
            model = gltf.scene;
            let fileAnimations = gltf.animations;
    
              model.traverse(o => {
    
              if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;
                o.material = stacy_mtl;
              }
              // Reference the neck and waist bones
              if (o.isBone && o.name === 'mixamorigNeck') { 
                neck = o;
              }
              if (o.isBone && o.name === 'mixamorigSpine') { 
                waist = o;
              }
            });
            
            model.scale.set(7, 7, 7);
            model.position.y = -11;
                    
            scene.add(model);
            
  //          loaderAnim.remove();
            
            mixer = new THREE.AnimationMixer(model);
            let idleAnim = THREE.AnimationClip.findByName(fileAnimations, 'idle');
            
            idleAnim.tracks.splice(3, 3);
            idleAnim.tracks.splice(9, 3);
            
            idle = mixer.clipAction(idleAnim);
            idle.play();
            
          },
          undefined, // We don't need this function
          function(error) {
            console.error(error);
          }
        );
        
        // Add lights
        let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
        hemiLight.position.set(0, 50, 0);
        // Add hemisphere light to scene
        scene.add(hemiLight);
    
        let d = 8.25;
        let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
        dirLight.position.set(-8, 12, 8);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 1500;
        dirLight.shadow.camera.left = d * -1;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = d * -1;
        // Add directional Light to scene
        scene.add(dirLight);
        
        
      // Floor
      let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
      let floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xeeeeee,
        shininess: 0,
      });
    
      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -0.5 * Math.PI;
      floor.receiveShadow = true;
      floor.position.y = -11;
      scene.add(floor);
        
    
     }


      
      
    })
    */
    return (
        <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
           backgroundColor: '#fff',
           width: '100%',
           height: '80vh',
        }}
     >
        <ambientLight intensity={1.0} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <React.Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} />
        </React.Suspense>
     </Canvas>

    )
}
