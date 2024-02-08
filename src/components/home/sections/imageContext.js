import React, { createContext, useContext, useState } from 'react';
import { TextureLoader } from 'three';

export const TextureContext = createContext({});

export const TextureContextProvider = ({ children }) => {
    const [wallpaperMaterial, setWallpaperMaterial] = useState(null);

    const changeTexture = (texturePath) => {
        if (wallpaperMaterial) {
            new TextureLoader().load(texturePath, (texture) => {
                wallpaperMaterial.map = texture;
                wallpaperMaterial.needsUpdate = true;
            });
        }
    };

    return (
        <TextureContext.Provider value={{ setWallpaperMaterial, changeTexture }}>
            {children}
        </TextureContext.Provider>
    );
};

export const useTextureContext = () => useContext(TextureContext);
