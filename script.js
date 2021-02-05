const faders = document.querySelectorAll('.fade-in');
const options ={
  theshold: 1
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll)
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, options);


faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})