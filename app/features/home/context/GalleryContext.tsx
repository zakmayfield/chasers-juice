import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';

export interface Post {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

type ContextType = {
  data: Post[];
};

const GalleryContext = createContext<ContextType>({
  data: [],
});

type GalleryProviderProps = PropsWithChildren & {
  data: Post[];
};

export const GalleryContextProvider = ({
  data,
  children,
}: GalleryProviderProps) => {
  return (
    <GalleryContext.Provider value={{ data }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => useContext(GalleryContext);
