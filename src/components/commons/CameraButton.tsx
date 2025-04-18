import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CameraCaptureProps {
    captureMode: 'user' | 'environment';
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ captureMode }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 0);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
            setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (image) {
      const link = document.createElement('a');
      link.href = image;
      link.download = 'TwistYouCapture.png';
      link.click();
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
        {image ? (
            <div style={{ marginTop: '1rem' }}>
            <img src={image} alt='Captured' style={{ maxWidth: '100%', height: 'auto' }} />
            <button onClick={handleDownload} style={{ display: 'block', marginTop: '0.5rem' }}>
                {t('game.camera.download', 'Download')}
            </button>
            </div>
        ):(
            <>
                <button onClick={() => handleClick()}>
                    {t('game.camera.' + captureMode)}
                </button>
                <input
                    key={captureMode}
                    type='file'
                    accept='image/*'
                    capture={captureMode}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />
            </>
        )}
    </div>
  );
};

export default CameraCapture;
