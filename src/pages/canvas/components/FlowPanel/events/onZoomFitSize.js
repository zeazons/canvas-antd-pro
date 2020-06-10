import * as Worker from '../worker';

export const onZoomFitSize = (editor) => {
  Worker['zoomFitSize'](editor);
};
