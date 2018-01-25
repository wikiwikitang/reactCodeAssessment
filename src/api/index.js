let fakeDatabase = [
  {date: "2018-01-25", time: "11:11", description: "some time"},
  {date: "2018-01-27", time: "12:12", description: "some time"},
  {date: "2018-01-29", time: "09:09", description: "test desc"}
];

//use setTimeout and promise simulate the backend API
export const getAppointments = (value) =>{
  let ret = [];
  if(!value || value.trim().length === 0){
    ret = fakeDatabase.slice();
  }else{
    fakeDatabase.forEach((ele)=>{
      if(ele.description.indexOf(value) >= 0){
        ret.push(ele);
      }
    });
  }

  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve(ret);
    }, 500);
  })
};


export const addAppointment = (value) =>{
  fakeDatabase.push(value);
  console.log("new fakeDatabase", fakeDatabase);
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve("Successfully updated fakeDatabase");
    }, 500)
  }).then(()=>{
    window.alert("You have successfully add a new Appointment!")
  })


}
