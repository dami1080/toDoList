export class Duty {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }
  
  push(arr) {
    this.index = arr.length;
    arr.push(this);
    window.localStorage.setItem('tasklist', JSON.stringify(arr));
    window.location.reload();
  }
}

export function removecompleted(arr) {
  const todelete = [];
  arr.forEach((element) => {
    if (element.completed === true) {
      todelete.push(element);
      const filteredArray = arr.filter((item) => !todelete.includes(item));
      filteredArray.forEach((element) => {
        element.index = filteredArray.indexOf(element);
      });
      window.localStorage.setItem('tasklist', JSON.stringify(filteredArray));
      window.location.reload();
    }
 });
}

export function removeAll(arr) {
  arr = [];
  window.localStorage.setItem('tasklist', JSON.stringify(arr));
  window.location.reload();
}