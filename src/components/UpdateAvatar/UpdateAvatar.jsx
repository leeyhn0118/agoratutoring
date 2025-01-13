import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

import { createImage } from 'src/utilities/images';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './UpdateAvatar.gql';
import * as S from './UpdateAvatar.style';

const UpdateAvatar = ({ open, close, className }) => {
  const input = useRef();
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();

  const [updateViewer, { loading }] = useMutationHandler(query.updateViewer, {
    onCompleted: ({ addNotification }) => {
      addNotification({
        type: 'toast',
        level: 'success',
        timeout: 10000,
        content: 'Your profile image has been updated successfully.',
      });
      setImage();
    },
  });

  useEffect(() => {
    if (open && !image) {
      input.current.click();
    }
  }, [open]);

  useEffect(() => {
    if (open && !image) {
      close();
    }
  });

  const onFileChange = async (e) => {
    const src = e.target.files?.[0];
    e.target.value = '';

    if (src) {
      setImage(
        await new Promise((resolve) => {
          const reader = new FileReader();
          reader.addEventListener('load', () => resolve(reader.result), false);
          reader.readAsDataURL(src);
        })
      );
    } else {
      close();
    }
  };

  return (
    <>
      <S.Input
        ref={input}
        type="file"
        value={null}
        onChange={onFileChange}
        accept="image/png, image/jpg"
      />
      <S.Modal
        title="Update Profile Photo"
        position="center"
        open={Boolean(image)}
        close={() => setImage()}
        contentLabel="Avatar Editor Modal"
      >
        <S.UpdateAvatar className={className}>
          <S.Container>
            <S.Editor
              aspect={1}
              crop={crop}
              zoom={zoom}
              image={image}
              showGrid={false}
              cropShape="round"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={(croppedArea, croppedPixels) => {
                setCroppedAreaPixels(croppedPixels);
              }}
            />
          </S.Container>
          <S.Label htmlFor="ZoomInput">
            Zoom Level <S.Indicator>{parseFloat(zoom).toFixed(1)}x</S.Indicator>
          </S.Label>
          <S.Range
            type="range"
            id="ZoomInput"
            min={1}
            max={3}
            step={0.1}
            label="zoom"
            value={zoom}
            onChange={({ target: { value: newValue } }) => setZoom(newValue)}
          />
          <S.Button
            type="button"
            loading={loading}
            onClick={async () => {
              updateViewer({
                variables: {
                  input: {
                    patch: {
                      avatar: await createImage(image, croppedAreaPixels),
                    },
                  },
                },
              });
            }}
          >
            Update Profile Photo
          </S.Button>
        </S.UpdateAvatar>
      </S.Modal>
    </>
  );
};

UpdateAvatar.defaultProps = {
  className: undefined,
};

UpdateAvatar.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  className: propTypes.string,
};

export default UpdateAvatar;
