tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          figtree: ['Figtree', 'sans-serif'],
          noto: ['Noto Sans', 'sans-serif'],
        },
        screens: {
              'mobile': { 'max': '600px' },
              'tablet': { 'min': '601px', 'max': '900px' },
              'desktop': { 'min': '901px', 'max': '1080px' },
          },
      },
    },
   
  }
  window.addEventListener('load', () => {
    const col1 = document.getElementById('col-1');
    const col2 = document.getElementById('col-2');

    setTimeout(() => {
      col1.classList.add('slide-up');
      col2.classList.add('slide-down');
    }, 300); 
  });