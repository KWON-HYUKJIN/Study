const handleState = (name, location, isPet, isFlower) => {
  let state = {};

  const setState = (value) => {
    state = value;
  };

  setState({
    name,
    location,
    isPet: (Boolean = false),
    isFlower: (Boolean = false),
  });

  // console.log(state);

  //   if (state.name == undefined || state.name == null) {
  //     return console.log("name을 입력해주세요");
  //   } else if (state.location == undefined || state.location == null) {
  //     return console.log("location을 입력해주세요");
  //   } else {
  //     // Submit
  //     return console.log(state);
  //   }

    if(!name){
      return console.log("name을 입력해주세요");
    }

    if(!location){
      return console.log("location을 입력해주세요");
    }

    if(!!name && !!location){
      return console.log(state);
    }
};

handleState(); // name을 입력해주세요
handleState("Mary"); // location을 입력해주세요
handleState("Jerry", "Earth"); // { name: 'Jerry', location: 'Earth', isPet: false, isFlower: false }
