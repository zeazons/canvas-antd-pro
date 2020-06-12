import * as Worker from '../commander/worker';

export const onZoomActualSize = (editor) => {
  Worker['zoomActualSize'](editor);
};
