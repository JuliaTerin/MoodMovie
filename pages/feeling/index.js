export default () => {
  const container = document.createElement('div');

  const template = `
    <main>
        <h2 class="title-feeling">Oi tudo bem?<br>Como está seu humor hoje?</h2>
        <section>   
            <a href="./#movie?genre=animation,comedy"> <button id="btn-stressed" class="btn-stressed">Estressade</button></a>
            <a href="./#movie?genre=fiction,thriller"> <button id="btn-inspired" class="btn-inspired" >Inspirade</button></a>
            <a href="./#movie?genre=comedy,drama"> <button id="btn-happy" class="btn-happy" >Feliz</button></a>
            <a href="./#movie?genre=fiction,comedy"> <button id="btn-bored" class="btn-bored" >Entediade</button></a>
            <a href="./#movie?genre=drama,comedy"> <button id="btn-heart-broken" class="btn-heartbroken" >Coração Partido</button></a>
            <a href="./#movie?genre=animation,comedy"> <button id="btn-sad" class="btn-sad" >Triste</button></a>
            <a href="./#movie?genre=drama,romance"> <button id="btn-sensitive" class="btn-sensitive" >Sensível</button></a>
            <a href="./#movie?genre=drama,romance"> <button id="btn-in-love<" class="btn-in-love" >Apaixonade</button></a>
        </section>
    </main>
  `;
  container.innerHTML = template;

  return container
}
