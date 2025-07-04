// /* ✅ clock.js */
// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40; // height per digit
//   document.getElementById('hour-tens').style.transform = `translateY(-${ht * height}px)`;
//   document.getElementById('hour-ones').style.transform = `translateY(-${ho * height}px)`;
//   document.getElementById('minute-tens').style.transform = `translateY(-${mt * height}px)`;
//   document.getElementById('minute-ones').style.transform = `translateY(-${mo * height}px)`;
//   document.getElementById('second-tens').style.transform = `translateY(-${st * height}px)`;
//   document.getElementById('second-ones').style.transform = `translateY(-${so * height}px)`;
//   document.getElementById('ampm-strip').style.transform = `translateY(-${(ampm === 'PM' ? 1 : 0) * height}px)`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0', '1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);
// };





// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40;
//   document.getElementById('hour-tens').style.transform = `translateY(-${ht * height}px)`;
//   document.getElementById('hour-ones').style.transform = `translateY(-${ho * height}px)`;
//   document.getElementById('minute-tens').style.transform = `translateY(-${mt * height}px)`;
//   document.getElementById('minute-ones').style.transform = `translateY(-${mo * height}px)`;
//   document.getElementById('second-tens').style.transform = `translateY(-${st * height}px)`;
//   document.getElementById('second-ones').style.transform = `translateY(-${so * height}px)`;
//   document.getElementById('ampm-strip').style.transform = `translateY(-${(ampm === 'PM' ? 1 : 0) * height}px)`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);
// };







// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40;
//   document.getElementById('hour-tens').style.transform = `translateY(calc(120px - ${ht * height}px))`;
//   document.getElementById('hour-ones').style.transform = `translateY(calc(120px - ${ho * height}px))`;
//   document.getElementById('minute-tens').style.transform = `translateY(calc(120px - ${mt * height}px))`;
//   document.getElementById('minute-ones').style.transform = `translateY(calc(120px - ${mo * height}px))`;
//   document.getElementById('second-tens').style.transform = `translateY(calc(120px - ${st * height}px))`;
//   document.getElementById('second-ones').style.transform = `translateY(calc(120px - ${so * height}px))`;
//   document.getElementById('ampm-strip').style.transform = `translateY(calc(120px - ${(ampm === 'PM' ? 1 : 0) * height}px))`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);
// };








// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40;
//   document.getElementById('hour-tens').style.transform = `translateY(${120 - ht * height}px)`;
//   document.getElementById('hour-ones').style.transform = `translateY(${120 - ho * height}px)`;
//   document.getElementById('minute-tens').style.transform = `translateY(${120 - mt * height}px)`;
//   document.getElementById('minute-ones').style.transform = `translateY(${120 - mo * height}px)`;
//   document.getElementById('second-tens').style.transform = `translateY(${120 - st * height}px)`;
//   document.getElementById('second-ones').style.transform = `translateY(${120 - so * height}px)`;
//   document.getElementById('ampm-strip').style.transform = `translateY(${120 - (ampm === 'PM' ? 1 : 0) * height}px)`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);
// };











// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40;
//   document.getElementById('hour-tens').style.transform = `translateY(${120 - ht * height}px)`;
//   document.getElementById('hour-ones').style.transform = `translateY(${120 - ho * height}px)`;
//   document.getElementById('minute-tens').style.transform = `translateY(${120 - mt * height}px)`;
//   document.getElementById('minute-ones').style.transform = `translateY(${120 - mo * height}px)`;
//   document.getElementById('second-tens').style.transform = `translateY(${120 - st * height}px)`;
//   document.getElementById('second-ones').style.transform = `translateY(${120 - so * height}px)`;
//   document.getElementById('ampm-strip').style.transform = `translateY(${120 - (ampm === 'PM' ? 1 : 0) * height}px)`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);
// };









// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40;
//   document.getElementById('hour-tens').style.transform = `translateY(${120 - ht * height}px)`;
//   document.getElementById('hour-ones').style.transform = `translateY(${120 - ho * height}px)`;
//   document.getElementById('minute-tens').style.transform = `translateY(${120 - mt * height}px)`;
//   document.getElementById('minute-ones').style.transform = `translateY(${120 - mo * height}px)`;
//   document.getElementById('second-tens').style.transform = `translateY(${120 - st * height}px)`;
//   document.getElementById('second-ones').style.transform = `translateY(${120 - so * height}px)`;
//   document.getElementById('ampm-strip').style.transform = `translateY(${120 - (ampm === 'PM' ? 1 : 0) * height}px)`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);
// };






// const createDigits = (elementId, values) => {
//   const strip = document.getElementById(elementId);
//   strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
// };

// const updateClock = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   const ht = Math.floor(hours / 10);
//   const ho = hours % 10;
//   const mt = Math.floor(minutes / 10);
//   const mo = minutes % 10;
//   const st = Math.floor(seconds / 10);
//   const so = seconds % 10;

//   const height = 40;
//   document.getElementById('hour-tens').style.transform = `translateY(${120 - ht * height}px)`;
//   document.getElementById('hour-ones').style.transform = `translateY(${120 - ho * height}px)`;
//   document.getElementById('minute-tens').style.transform = `translateY(${120 - mt * height}px)`;
//   document.getElementById('minute-ones').style.transform = `translateY(${120 - mo * height}px)`;
//   document.getElementById('second-tens').style.transform = `translateY(${120 - st * height}px)`;
//   document.getElementById('second-ones').style.transform = `translateY(${120 - so * height}px)`;
//   document.getElementById('ampm-strip').style.transform = `translateY(${120 - (ampm === 'PM' ? 1 : 0) * height}px)`;
// };

// window.onload = () => {
//   createDigits('hour-tens', ['0', '1']);
//   createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('minute-tens', ['0','1','2','3','4','5']);
//   createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('second-tens', ['0','1','2','3','4','5']);
//   createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
//   createDigits('ampm-strip', ['AM', 'PM']);

//   updateClock();
//   setInterval(updateClock, 1000);

//   // Toggle sidebar
//   const toggleButton = document.createElement('button');
//   toggleButton.textContent = '☰';
//   toggleButton.classList.add('toggle-sidebar');
//   document.body.appendChild(toggleButton);

//   toggleButton.addEventListener('click', () => {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.toggle('active');
//   });
// };













const createDigits = (elementId, values) => {
  const strip = document.getElementById(elementId);
  strip.innerHTML = values.map(v => `<div>${v}</div>`).join('');
};

const updateClock = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const ht = Math.floor(hours / 10);
  const ho = hours % 10;
  const mt = Math.floor(minutes / 10);
  const mo = minutes % 10;
  const st = Math.floor(seconds / 10);
  const so = seconds % 10;

  const height = 40;
  document.getElementById('hour-tens').style.transform = `translateY(${120 - ht * height}px)`;
  document.getElementById('hour-ones').style.transform = `translateY(${120 - ho * height}px)`;
  document.getElementById('minute-tens').style.transform = `translateY(${120 - mt * height}px)`;
  document.getElementById('minute-ones').style.transform = `translateY(${120 - mo * height}px)`;
  document.getElementById('second-tens').style.transform = `translateY(${120 - st * height}px)`;
  document.getElementById('second-ones').style.transform = `translateY(${120 - so * height}px)`;
  document.getElementById('ampm-strip').style.transform = `translateY(${120 - (ampm === 'PM' ? 1 : 0) * height}px)`;
};

window.onload = () => {
  createDigits('hour-tens', ['0', '1']);
  createDigits('hour-ones', ['0','1','2','3','4','5','6','7','8','9']);
  createDigits('minute-tens', ['0','1','2','3','4','5']);
  createDigits('minute-ones', ['0','1','2','3','4','5','6','7','8','9']);
  createDigits('second-tens', ['0','1','2','3','4','5']);
  createDigits('second-ones', ['0','1','2','3','4','5','6','7','8','9']);
  createDigits('ampm-strip', ['AM', 'PM']);

  updateClock();
  setInterval(updateClock, 1000);

  // Toggle sidebar only on dashboard
  if (document.querySelector('.dashboard')) {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.classList.add('toggle-sidebar');
    document.querySelector('.dashboard').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('active');
    });
  }
};
