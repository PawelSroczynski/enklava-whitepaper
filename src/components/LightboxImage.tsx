import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface LightboxImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function LightboxImage({ src, alt, caption }: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const imgSrc = useBaseUrl(src);

  return (
    <>
      <figure className="lightbox-figure">
        <img
          src={imgSrc}
          alt={alt}
          onClick={() => setOpen(true)}
          className="lightbox-thumbnail"
          style={{ cursor: 'zoom-in' }}
        />
        {caption && <figcaption className="lightbox-caption">{caption}</figcaption>}
      </figure>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imgSrc, alt }]}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        }}
      />
    </>
  );
}
