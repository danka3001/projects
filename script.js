
  
    const customCards = document.querySelectorAll('.custom-card');
    customCards.forEach((card) => {
      let isFlipped = false;
  
      card.addEventListener('click', () => {
        if (isFlipped) {
          card.style.transform = 'translateY(0)';
        } else {
          card.style.transform = 'translateY(-10px)';
        }
  
        isFlipped = !isFlipped;
      });
    });

    