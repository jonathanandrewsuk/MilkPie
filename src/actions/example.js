export const changeGreeting = (data) => (
{
      type: S$_CHANGE_GREETING,
      data,
  }
);

export const S$_CHANGE_GREETING = 'S$_CHANGE_GREETING';
export const CHANGE_GREETING = 'CHANGE_GREETING';

export const changeColor = (data) => (
{
      type: CHANGE_COLOR,
      data
  }
);
export const CHANGE_COLOR = 'CHANGE_COLOR';


export const S$_GET_PHOTOS = 'S$_GET_PHOTOS';
export const getPhotos = () => (
{
      type: S$_GET_PHOTOS,
  }
);


export const UPDATE_PHOTOS = 'UPDATE_PHOTOS';
export const updatePhotos = (data) => (
{
      type: UPDATE_PHOTOS,
      data
  }
);
