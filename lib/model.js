
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader} from 'three/src/loaders/TextureLoader';
export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'computer'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}

export function loadOBJModel(
  scene,
  objPath,
  mtlPath,
  txtPath,
  options = {receiveShadow: true, castShadow: true }
) {
  const {receiveShadow, castShadow } = options;
  
  return new Promise((resolve, reject) => {
    const mtlLoader = new MTLLoader()    
    mtlLoader.load(mtlPath, function(materials){      
      materials.preload()      
      const objLoader = new OBJLoader()
      objLoader.setMaterials(materials)      
      objLoader.load(
        objPath,
        (obj) => {
          obj.name = 'computer'
          obj.position.y = 0
          obj.position.x = 0
          obj.receiveShadow = receiveShadow
          obj.castShadow = castShadow
          const texture = new TextureLoader().load(txtPath)
          scene.add(obj);
          obj.traverse( function (child) {
            if(child.isMesh){              
              child.receiveShadow = receiveShadow
              child.castShadow = castShadow              
              child.material.map = texture
            }
          });
          resolve(obj);
        },
        (xhr) => {
          console.log((xhr.loaded/xhr.total*100) + '% loaded');
        },
        (error) => {
          reject(error);
        }        
      )
    });
  });
}
