import $ from 'jquery';

// export const onWidgetsFilter = (ref, extraParams) => {
export const onWidgetsFilter = (event) => {
  console.log('onWidgetsFilter');
  console.log('event: ', event);

  //   // Init a timeout variable to be used below
  //   let timeout = null;

  //   // Listen for keystroke events
  //   ref.keyup((event) => {
  //     // Clear the timeout if it has already been set.
  //     // This will prevent the previous task from executing
  //     // if it has been less than <MILLISECONDS>
  //     clearTimeout(timeout);

  //     // Make a new timeout set to go off in 2000ms (2 second)
  //     timeout = setTimeout(() => {
  //       const params = {
  //         editor: extraParams,
  //         search: $(event.target).val(),
  //       };
  //       this.receiveEvent(`onFilterWidgets`, ref, params);
  //     }, 1000);
  //   });
};
