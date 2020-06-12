import * as Worker from '../commander/worker';

export const onZoomFitSize = (editor) => {
  Worker['zoomFitSize'](editor);
};
