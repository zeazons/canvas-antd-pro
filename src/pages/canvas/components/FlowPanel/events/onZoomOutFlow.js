import * as Worker from '../commander/worker';

export const onZoomOutFlow = (editor) => {
  Worker['zoomOutFlow'](editor);
};
