import * as Worker from '../worker';

export const onZoomActualSize = (editor) => {
  Worker['zoomActualSize'](editor);
};
