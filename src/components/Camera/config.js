export const VIDEO_CONSTRAINTS_DEFAULT = {
  width: 1280,
  height: 720,
  facingMode: 'environment',
  zoom: true,
};

export const SCREENSHOT_FORMAT_DEFAULT = 'image/jpeg';

export const ZOOM = 'zoom';

export const getStreamTrack = (stream) => {
  // eslint-disable-next-line no-multi-assign
  const [track] = ([window.track] = stream.getVideoTracks());
  return track;
};

export const ICON_WIDTH = 80;

export const ERRORS = {
  PERMISSIONS_DENIED: 'Permission denied',
};
