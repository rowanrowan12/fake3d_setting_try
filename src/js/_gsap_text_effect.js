import gsap from "gsap";

const elements = document.querySelectorAll('.text');
const btns = document.querySelectorAll('button');


  btns.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget;
      const i = Array.from(btns).indexOf(e.currentTarget);
      const text = elements[i].textContent;


      //1
      if(currentTarget.classList.contains(`btn1`)){
        elements[i].innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
        gsap.from(elements[i].querySelectorAll('span'), { y: 50, opacity: 0, stagger: 0.01 });

        console.log('111')
      }

      //2
      if(currentTarget.classList.contains(`btn2`)){
        elements[i].innerHTML = text.split(' ').map(word => `<span>${word} </span>`).join('');
        gsap.from(elements[i].querySelectorAll('span'), { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 });
        
        console.log('2')
      }

      //3
      if(currentTarget.classList.contains(`btn3`)){
        const lines = elements[i].innerHTML.split('<br>');

        elements[i].innerHTML = lines.map(line => `<div class="line">${line}</div>`).join('');
        // elements[i].innerHTML = lines.map(line => `<div class="line">${line}</div>`);
        gsap.from(elements[i].querySelectorAll('.line'), { y: 30, opacity: 0, stagger: 0.1 });
      }

      //4
      if(currentTarget.classList.contains(`btn4`)){
        elements[i].innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

        gsap.to(elements[i].querySelectorAll('span'), { 
          y: (i) => Math.sin(i * 0.5) * 20,  // 물결 효과
          repeat: -1, 
          yoyo: true, 
          stagger: 0.01, 
          duration: 1,
          opacity: 0
        });

        console.log('44')
      }

      //5
      if(currentTarget.classList.contains(`btn5`)){
        elements[i].innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

        gsap.fromTo(elements[i].querySelectorAll('span'), 
          { x: 0, y: 0 }, 
          { 
              x: () => Math.random() * 10 - 5, 
              y: () => Math.random() * 10 - 5, 
              repeat: -1, 
              yoyo: true, 
              duration: 0.1, 
              stagger: 0.02,
              opacity: 0
          }
        );
      }
      
      //6
      if(currentTarget.classList.contains(`btn6`)){
        elements[i].innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
        gsap.from(elements[i].querySelectorAll('span'), { y: 100, opacity: 0, duration: 1, stagger: 0.05 });
      }      

    })
  });
