import * as Worker from '../worker';

export const onZoomInFlow = (editor) => {
  Worker['zoomInFlow'](editor);
};
