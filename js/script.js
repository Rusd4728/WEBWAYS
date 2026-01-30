const canvas = document.getElementById("future3d");
if(canvas){
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  const light = new THREE.PointLight(0xffffff,1);
  light.position.set(5,5,5);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load('assets/3d/tee_model.glb', function(gltf){
    const model = gltf.scene;
    model.scale.set(1.5,1.5,1.5);
    scene.add(model);
    animate(model);
  });

  camera.position.z = 4;

  function animate(model){
    requestAnimationFrame(()=>animate(model));
    model.rotation.y += 0.003;
    renderer.render(scene,camera);
  }
}
