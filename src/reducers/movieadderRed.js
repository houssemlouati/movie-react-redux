const movieadderRed = (
  state = [
    {
      inpName: "Zorro",
      inpDate: "1998",
      inpSrc:
        "https://fr.web.img5.acsta.net/medias/nmedia/18/35/14/97/18449713.jpg",
      id: 1,
      rating: 5,
      isOpen: false,
      isEditable: false,
    },
    {
      inpName: "les dalton",
      inpDate: "2004",
      inpSrc:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/35/17/34/18393598.jpg",
      id: 2,
      rating: 4,
      isOpen: false,
      isEditable: false,
    },
    {
      inpName: "Zootopia",
      inpDate: "2016",
      inpSrc:
        "https://images.lpcdn.ca/924x615/201603/04/1150779-contrairement-275-freres-soeurs-lapine.jpg",
      id: 3,
      rating: 5,
      isOpen: false,
      isEditable: false,
    },
    {
      inpName: "The expandables",
      inpDate: "2010",
      inpSrc:
        "https://i.pinimg.com/originals/8c/1e/f4/8c1ef447f1aad5233d22a033b12d5ae5.jpg",
      id: 4,
      rating: 4,
      isOpen: false,
      isEditable: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.movie];
    case "DELETE":
      return (state = state.filter((el) => el.id !== action.id));
    case "UPDATE":
      return state.map((el) =>
        el.id === action.id ? { ...el, isOpen: !el.isOpen } : el
      );
    case "EDIT":
      return state.map((el) =>
        el.id === action.data.id
          ? {
              ...el,
              inpName: action.data.todo,
              inpDate: action.data.date,
              inpSrc: action.data.img,
              rating: action.data.rating,
            }
          : el
      );
    default:
      return state;
  }
};

export default movieadderRed;
