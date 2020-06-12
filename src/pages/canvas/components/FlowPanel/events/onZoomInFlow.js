import * as Worker from '../commander/worker';

export const onZoomInFlow = (editor) => {
  Worker['zoomInFlow'](editor);
};
