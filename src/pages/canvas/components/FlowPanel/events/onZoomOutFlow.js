import * as Worker from '../worker';

export const onZoomOutFlow = (editor) => {
  Worker['zoomOutFlow'](editor);
};
