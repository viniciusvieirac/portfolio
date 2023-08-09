export type ImageL = {
    id: string;
    src: string;
    alt: string;
    name: string;
    description: string;
    repo: string;
  };
  
export type CarouselProps = {
    images: ImageL[];
  };