import $ from 'jquery';

const setVisibled = (button, isVisible) => {
  $(button).prop('disabled', !isVisible);
  if (isVisible) {
    $(button).show();
  } else {
    $(button).hide();
  }
};

export const loadToolbarButton = (refs, data) => {
  const { tools } = data;
  const ref = refs.current[2];

  for (let i = 0; i < tools.length; i++) {
    let btn;

    switch (tools[i].button) {
      case 'CollapseWidgets':
        btn = $(ref).find('*[data-icon="minus"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'ExpandWidgets':
        btn = $(ref).find('*[data-icon="plus"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'OpenFlow':
        btn = $(ref).find('*[data-icon="folder-open"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'EditFlow':
        btn = $(ref).find('*[data-icon="edit"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'SaveFlow':
        btn = $(ref).find('*[data-icon="save"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'DiscardFlow':
        btn = $(ref).find('*[data-icon="history"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'CloseFlow':
        btn = $(ref).find('*[data-icon="times-circle"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'UndoFlow':
        btn = $(ref).find('*[data-icon="undo-alt"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'RedoFlow':
        btn = $(ref).find('*[data-icon="redo-alt"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'ToggleGuideline':
        btn = $(ref).find('*[data-icon="border-none"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'ZoomOut':
        btn = $(ref).find('*[data-icon="search-minus"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'ZoomIn':
        btn = $(ref).find('*[data-icon="search-plus"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'ZoomActualSize':
        btn = $(ref).find('*[data-icon="compress"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      case 'ZoomFitSize':
        btn = $(ref).find('*[data-icon="expand"]').parent();
        setVisibled(btn, tools[i].visibled);
        break;

      default:
        break;
    }
  }
};
