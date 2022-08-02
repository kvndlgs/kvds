import * as React from 'react';
import { useAnimations, useGLTF } from '@react-three/drei'


export default function Model({ ...props }) {

    const group = React.useRef();
    const { nodes, materials, animations } = useGLTF('/3d/bd.glb');

    const { actions } = useAnimations(animations, group);
    React.useEffect(() => {
      actions['Armature|mixamo.com|Layer0'].play();
    })
    return (
       <group ref={group} {...props} dispose={null}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
         />
         <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
         />
         <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
         />
         <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
         />
         <skinnedMesh
            name="EyeLeft"
            geometry={nodes.Wolf3D_EyeLeft.geometry}
            material={nodes.Wolf3D_EyeLeft.material}
            skeleton={nodes.Wolf3D_EyeLeft.skeleton}
            morphTargetDictionary={nodes.Wolf3D_EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_EyeLeft.morphTargetInfluences}
         />
         <skinnedMesh
            name="EyeRight"
            geometry={nodes.Wolf3D_EyeRight.geometry}
            material={nodes.Wolf3D_EyeRight.material}
            skeleton={nodes.Wolf3D_EyeRight.skeleton}
            morphTargetDictionary={nodes.Wolf3D_EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_EyeRight.morphTargetInfluences}
         />
         <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
         />
         <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
         />
       </group>
    );
 }

 useGLTF.preload('/3d/bd.glb');
