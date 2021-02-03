export default () => {
  const container = document.createElement('div');
  const template = `
  <header>
      <h1 class="logo">MoodMovie</h1>
      <div class="logo-background">
          <span class="logo-background-red"></span>
          <span class="logo-background-orange"></span>
          <span class="logo-background-yellow"></span>
          <span class="logo-background-green"></span>
          <span class="logo-background-royalBlue"></span>
          <span class="logo-background-blue"></span>
          <span class="logo-background-purple"></span>
          <span class="logo-background-pink"></span>
      </div>
  </header>
  <main>
  
          <h2 class="title-home">Me diga como se sente, que eu te direi o que assistir</h2>
          <a href="./#feeling"> <button id="start" class="btn-start">Começar</button></a>
      
  </main>
      <footer><img class="logo-github" src="img/github.png" alt="logo github" /> Desenvolvido por <br> 
        <a href="https://github.com/ale-alves" target="_blank">Alessandra</a>, <a href="https://github.com/carinarocha" target="_blank">Carina</a>, 
        <a href="https://github.com/CarolineSCosta" target="_blank">Caroline</a>,<a href="https://github.com/JuliaTerin" target="_blank">Julia</a>, 
        <a href="https://github.com/julianaads" target="_blank">Juliana</a> e <a href="https://github.com/karinesouza" target="_blank">Karine</a>
      </footer>
  `;
  container.innerHTML = template;

  return container
}