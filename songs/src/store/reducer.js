import * as actionTypes from './actions';

const initialState = {
    slectedSong: null,
    songs: [
      {title: 'Teri Yadain', duration: '3:05'},
      {title: 'kiven Mukhre', duration: '4:05'},
      {title: 'Loye Loye Aja Maahi', duration: '5:05'},
      {title: 'Man Atkeya', duration: '5:05'},

    ]

};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SONG_SELECTED:
            return {
                songs: state.songs,
                selectedSong: action.payload,
            };


        default:
            return state;
    }

};

export default reducer;