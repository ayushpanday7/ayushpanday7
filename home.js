window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.style.overflow = 'visible';
    this.document.querySelector(".sidebar").style = "Display:block";
  });
  let mediaQuery = window.matchMedia('(max-width: 1000px)');
  function handleMediaQueryChange(event) {
    if (event.matches) {
      document.querySelector(".sidebar").classList.add("hidesidebar");
      document.querySelector(".hide").style.display = "none";
      document.querySelector(".show").style.display = "flex";
    } else {
      document.querySelector(".sidebar").classList.remove("hidesidebar");
      document.querySelector(".hide").style.display = "flex";
      document.querySelector(".show").style.display = "none";
    }
  }
  handleMediaQueryChange(mediaQuery);
  mediaQuery.addEventListener('change', handleMediaQueryChange);
  document.querySelector(".hamburger").addEventListener("click",()=>{
    var sidebar = document.querySelector(".sidebar").classList;
    sidebar.toggle("hidesidebar");
    if(sidebar.contains("hidesidebar"))
    {
      document.querySelector(".hide").style = "display:none";
      setTimeout(() => {
        document.querySelector(".show").style = "display:flex;";
      }, 900);  
    }
    else{
      document.querySelector(".show").style = "display:none";
      setTimeout(() => {
        document.querySelector(".hide").style = "display:flex;";
      }, 1000);  
    }
  })
  