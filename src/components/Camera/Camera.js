import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
  Suspense,
  lazy,
} from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import _noop from 'lodash/noop';

import { useScroll } from '@hooks';
import i18n from '@i18n';
import { SmallImage, PageNavigator, Portal, Slider } from '@components';
import * as Icons from '../../Icons';
import Loader from '../../Loader';

import {
  getStreamTrack,
  VIDEO_CONSTRAINTS_DEFAULT,
  SCREENSHOT_FORMAT_DEFAULT,
  ZOOM,
  ICON_WIDTH,
  ERRORS,
} from './config';
import './Camera.scss';

const ActionModal = lazy(() => import('../../Modal/ActionModal'));

function Camera({
  allScreen = true,
  nativeOptions = {},
  audio = false,
  videoConstraints = VIDEO_CONSTRAINTS_DEFAULT,
  screenshotFormat = SCREENSHOT_FORMAT_DEFAULT,
  showSelectedImage = false,
  getImages = _noop,
  onSend = _noop,
  onMoreImages = _noop,
  onError = _noop,
  onChangeShowSelected = _noop,
  onPermissionsError = _noop,
  customImage = null,
  swiper = true,
  customListOfImages = null,
  customListOfSelectedImages = null,
  onlyCustomImage = false,
  showCameraButton = true,
  children,
}) {
  const [actualImage, setActualImage] = useState(null);
  const [showListOfImages, setShowListOfImages] = useState(false);
  const [listOfImages, setListOfImages] = useState([]);
  const [listOfSelectedImages, setListOfSelectedImages] = useState([]);
  const [swiperImage, setSwiperImage] = useState(0);
  const [cameraWithZoom, setCameraWithZoom] = useState(false);
  const [zoomConfig, setZoomConfig] = useState({});
  const [activeFlash, setActiveFlash] = useState(false);
  const [hasNotPermissions, setHasNotPermissions] = useState(false);

  const webcamRef = useRef(null);

  useScroll({ disableScroll: allScreen });

  const handleClickCapture = useCallback(() => {
    const imgBase64 = webcamRef.current.getScreenshot();
    if (imgBase64) {
      setActualImage(imgBase64);

      if (showListOfImages) {
        const validList = listOfImages.length < 5;
        const finalList = validList ? listOfImages : listOfImages.slice(0, -1);
        setListOfImages([...finalList, imgBase64]);
      }
    }
  }, [webcamRef, listOfImages, showListOfImages]);

  const handleClickMoreImages = useCallback(() => {
    onMoreImages();
    setShowListOfImages(true);
  }, [onMoreImages]);

  const handleClickSend = useCallback(() => {
    onSend({ actualImage, listOfImages, listOfSelectedImages });
  }, [onSend, actualImage, listOfImages, listOfSelectedImages]);

  const handleError = (error) => {
    console.error(error);
    // eslint-disable-next-line no-shadow
    const hasNotPermissions = error
      .toString()
      .includes(ERRORS.PERMISSIONS_DENIED);

    if (hasNotPermissions) {
      setHasNotPermissions(true);
      return;
    }
    onError(error);
  };

  const handleChangeCurrentPage = useCallback((currentPage) => {
    setSwiperImage(currentPage);
  }, []);

  const handleClickImage = useCallback(
    (status, image) => {
      let list = [];

      const filterList = () =>
        listOfSelectedImages.filter((selectedImage) => selectedImage !== image);

      if (status) {
        list = filterList();
        list.push(image);
      } else list = filterList();

      setListOfSelectedImages(list);
    },
    [listOfSelectedImages]
  );

  useEffect(() => {
    getImages(actualImage, listOfImages);
  }, [actualImage, listOfImages, getImages]);

  useEffect(() => {
    if (customListOfImages) {
      setListOfImages(customListOfImages);
      setListOfSelectedImages(customListOfImages);
      setActualImage(null);
    }
  }, [customListOfImages]);

  useEffect(() => {
    if (customListOfSelectedImages) {
      setListOfSelectedImages(customListOfSelectedImages);
    }
  }, [customListOfSelectedImages]);

  const imageSrc = useMemo(() => {
    const validListOfSelectedImgs = swiper && listOfSelectedImages.length > 0;
    if (onlyCustomImage) {
      return validListOfSelectedImgs
        ? listOfSelectedImages[swiperImage]
        : customImage;
    }
    return validListOfSelectedImgs
      ? listOfSelectedImages[swiperImage]
      : customImage || actualImage || '';
  }, [
    swiperImage,
    listOfSelectedImages,
    actualImage,
    customImage,
    onlyCustomImage,
  ]);

  const getValidRenderImage = () => {
    const validListOfSelectedImgs = swiper && listOfSelectedImages.length > 0;
    if (onlyCustomImage) {
      return customImage || validListOfSelectedImgs;
    }
    return customImage || actualImage || validListOfSelectedImgs;
  };

  const ADVANCED_FUNCTIONALITIES = useMemo(
    () => [
      { type: ZOOM, setConfig: setZoomConfig, setExist: setCameraWithZoom },
    ],
    []
  );

  const handleDoubleClick = useCallback(() => {
    setActiveFlash((currentActiveFlash) => !currentActiveFlash);
  }, []);

  useEffect(() => {
    if (webcamRef.current && webcamRef.current.stream) {
      const track = getStreamTrack(webcamRef.current.stream);
      const constraints = { advanced: [{ torch: activeFlash }] };
      track
        .applyConstraints(constraints)
        .then(() => console.log('Flash active'))
        .catch((error) => console.error('Flash error ', error));
    }
  }, [webcamRef.current, activeFlash]);

  const handleUserMedia = useCallback(
    (stream) => {
      const video = document.querySelector('video');
      video.srcObject = stream;

      const track = getStreamTrack(stream);
      const capabilities = track.getCapabilities();
      const settings = track.getSettings();

      ADVANCED_FUNCTIONALITIES.forEach(({ type, setConfig, setExist }) => {
        if (!(type in settings)) {
          console.error(`Camera does not support ${type}.`);
          return;
        }

        if (type === ZOOM) {
          setExist(true);
          setConfig(() => ({
            min: capabilities[type].min,
            max: capabilities[type].max,
            step: capabilities[type].step,
            onChange: async (currentValue) => {
              try {
                const constraints = {
                  advanced: [{ [type]: currentValue }],
                };
                await track.applyConstraints(constraints);
              } catch (error) {
                console.error(`Error apply ${type} `, error);
              }
            },
          }));
        }
      });
    },
    [ADVANCED_FUNCTIONALITIES]
  );

  const handlePermissionsError = () => {
    setHasNotPermissions(false);
    onPermissionsError();
  };

  const ViewImagesRender = (
    <div className="view-image">
      <div className="view-image__container">
        {getValidRenderImage() ? (
          <img src={imageSrc} className="view-image__image" alt="" />
        ) : (
          <div className={`view-image__${children ? 'image' : 'not-image'}`}>
            {children}
          </div>
        )}

        <div className="view-image__functions-container">
          {showCameraButton && (
            <button
              type="button"
              className="btn m-0 p-0 view-image__functions-container--camera-button"
              onClick={onChangeShowSelected}
            >
              <Icons.Camera width={ICON_WIDTH} />
            </button>
          )}
        </div>
      </div>

      {listOfSelectedImages.length > 0 && swiper && (
        <PageNavigator
          containerClassName="view-image__paginator-container mt-2"
          elements={listOfSelectedImages}
          onChangeCurrentPage={handleChangeCurrentPage}
        />
      )}
    </div>
  );

  const webcamRender = (
    <Webcam
      ref={webcamRef}
      videoConstraints={videoConstraints}
      audio={audio}
      screenshotFormat={screenshotFormat}
      onUserMediaError={handleError}
      onUserMedia={handleUserMedia}
      onDoubleClick={handleDoubleClick}
      {...nativeOptions}
    />
  );

  const CameraRender = (
    <div className="all-container">
      <div className="camera">
        <div className="camera__webcam">
          {cameraWithZoom ? (
            <Slider vertical allScreen {...zoomConfig}>
              {webcamRender}
            </Slider>
          ) : (
            webcamRender
          )}
        </div>

        <div className="camera__functions__container">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              {(listOfImages.length > 0 || actualImage) && (
                <div className="col-4 d-flex justify-content-center align-items-center">
                  {showListOfImages ? (
                    <div className="camera__list-of-images">
                      {listOfImages.map((image, i) => (
                        <SmallImage
                          key={image}
                          image={image}
                          alt={`vehicle ${i + 1}`}
                          onClick={handleClickImage}
                          active={listOfSelectedImages.find(
                            (selectedImage) => selectedImage === image
                          )}
                        />
                      ))}
                    </div>
                  ) : (
                    <button
                      className="btn camera__functions__item"
                      onClick={handleClickMoreImages}
                      type="button"
                    >
                      <Icons.MoreImages width={ICON_WIDTH} />
                    </button>
                  )}
                </div>
              )}

              <div className="col-4 d-flex justify-content-center align-items-center">
                <button
                  className="btn camera__functions__item"
                  onClick={handleClickCapture}
                  type="button"
                >
                  <Icons.Camera width={ICON_WIDTH} />
                </button>
              </div>

              {(listOfImages.length > 0 || actualImage) && (
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <button
                    className="btn camera__functions__item"
                    onClick={handleClickSend}
                    type="button"
                  >
                    <Icons.Send width={ICON_WIDTH} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AllRender = showSelectedImage ? ViewImagesRender : CameraRender;

  return (
    <Suspense fallback={<Loader show />}>
      {hasNotPermissions && (
        <ActionModal
          icon={<Icons.IcoCarError />}
          open={hasNotPermissions}
          success={false}
          title={i18n('CAMERA__PERMISSIONS_ERROR__TITLE')}
          actionLabel={i18n('COMMONS__CLOSE__TEXT')}
          message={i18n('CAMERA__PERMISSIONS_ERROR__MESSAGE')}
          closeButton={false}
          onAction={handlePermissionsError}
          modalType="confirmation"
        />
      )}
      {allScreen ? <Portal>{AllRender}</Portal> : AllRender}
    </Suspense>
  );
}

Camera.propTypes = {
  allScreen: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  nativeOptions: PropTypes.object,
  audio: PropTypes.bool,
  videoConstraints: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    facingMode: PropTypes.string,
    zoom: PropTypes.bool,
  }),
  screenshotFormat: PropTypes.string,
  showSelectedImage: PropTypes.bool,
  getImage: PropTypes.func,
  onSend: PropTypes.func,
  onMoreImages: PropTypes.func,
  onError: PropTypes.func,
  onChangeShowSelected: PropTypes.func,
  onPermissionsError: PropTypes.func,
  customImage: PropTypes.string,
  swiper: PropTypes.bool,
  customListOfImages: PropTypes.arrayOf(PropTypes.string),
  customListOfSelectedImages: PropTypes.arrayOf(PropTypes.string),
  onlyCustomImage: PropTypes.bool,
  showCameraButton: PropTypes.bool,
  children: PropTypes.node,
};

// eslint-disable-next-line react/destructuring-assignment
export default (props) => (props.show ? <Camera {...props} /> : null);
