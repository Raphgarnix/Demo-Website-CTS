const mainPanel = document.getElementById('mainPanel');

// Service-Details
const serviceDetails = {
  hardware: `
<header class="hero">
  <div class="hero-title">
    <div class="line">
      <span class="initial">C</span><span class="rest">omputer</span>
    </div>
    <div class="line">
      <span class="initial">T</span><span class="rest">echnik</span>
    </div>
    <div class="line">
      <span class="initial">S</span><span class="rest">chmickler</span>
    </div>
  </div>
</header>
    <section id="hardware-detail">
<button class="back-btn" onclick="showOverview(1)"> Zurück</button>
      <h2>Hardware</h2>
      <p>Hier stehen Details zu Hardware-Dienstleistungen</p>
    </section>
    <div class="fillwindow"></div>

    `,
  software: `
<header class="hero">
  <div class="hero-title">
    <div class="line">
      <span class="initial">C</span><span class="rest">omputer</span>
    </div>
    <div class="line">
      <span class="initial">T</span><span class="rest">echnik</span>
    </div>
    <div class="line">
      <span class="initial">S</span><span class="rest">chmickler</span>
    </div>
  </div>
</header>
  <section id="software-detail">
<button class="back-btn" onclick="showOverview(1)"> Zurück</button>
      <h2>Software</h2>
      <p>Hier stehen Details zu Software-Installationen</p>
    </section>
    <div class="fillwindow"></div>

    `,
  beratung: `
<header class="hero">
  <div class="hero-title">
    <div class="line">
      <span class="initial">C</span><span class="rest">omputer</span>
    </div>
    <div class="line">
      <span class="initial">T</span><span class="rest">echnik</span>
    </div>
    <div class="line">
      <span class="initial">S</span><span class="rest">chmickler</span>
    </div>
  </div>
</header>
  <section id="beratung-detail">
<button class="back-btn" onclick="showOverview(1)"> Zurück</button>
      <h2>Beratung</h2>
      <p>Hier stehen Details zur Beratung</p>
    </section>
    <div class="fillwindow"></div>

    `,
  impressum: `
<header class="hero">
  <div class="hero-title">
    <div class="line">
      <span class="initial">C</span><span class="rest">omputer</span>
    </div>
    <div class="line">
      <span class="initial">T</span><span class="rest">echnik</span>
    </div>
    <div class="line">
      <span class="initial">S</span><span class="rest">chmickler</span>
    </div>
  </div>
</header>
    <section id="impressum-detail">
<button class="back-btn" onclick="showOverview(2)"> Zurück</button>
      <h2>Impressum</h2>
      <p>Hier stehen die Impressumsangaben.</p>
    </section>
        <div class="fillwindow"></div>

  `,
  datenschutz: `
<header class="hero">
  <div class="hero-title">
    <div class="line">
      <span class="initial">C</span><span class="rest">omputer</span>
    </div>
    <div class="line">
      <span class="initial">T</span><span class="rest">echnik</span>
    </div>
    <div class="line">
      <span class="initial">S</span><span class="rest">chmickler</span>
    </div>
  </div>
</header>
    <section id="datenschutz-detail">
<button class="back-btn" onclick="showOverview(2)"> Zurück </button>
      <h2>Datenschutz</h2>
      <p>Hier stehen Informationen zum Datenschutz.</p>
    </section>
    <div class="fillwindow"></div>
  `
};


function showDetail(id) {
  const content = serviceDetails[id];
  if (!content) return;

  mainPanel.innerHTML = content;
}


// Übersicht anzeigen
function showOverview(backButton) {
  mainPanel.innerHTML = `
<header class="hero">
  <div class="hero-title">
    <div class="line">
      <span class="initial">C</span><span class="rest">omputer</span>
    </div>
    <div class="line">
      <span class="initial">T</span><span class="rest">echnik</span>
    </div>
    <div class="line">
      <span class="initial">S</span><span class="rest">chmickler</span>
    </div>
  </div>
  <p></p>
  <a href="tel:+49123456789" class="btn">Telefon</a>
  <a href="#contact" class="btn btn-secondary">Kontakt</a>
</header>







  <!-- Übersichtsbutton oben rechts -->
    <div class="menu-container">
    <button class="menu-btn">☰</button>
    <nav class="menu-reiter">
        <ul>
        <li><a href="#welcome">Start</a></li>
        <li><a href="#services">Leistungen</a></li>
        <li><a href="#about">Über uns</a></li>
        <li><a href="#opening-hours">Öffnungszeiten</a></li>
        <li><a href="#contact">Kontakt</a></li>
        </ul>
    </nav>
    </div>


    <section id="welcome">
    <h2>Herzlich Willkommen<hr class="hl"></h2>
    <p>Herzlich willkommen bei <strong class="highlight">CTS</strong>!<br>
    Sie haben Probleme mit Ihrer EDV oder benötigen spezielle Software
    und sind auf der Suche nach Lösungen? Dann sind Sie bei uns richtig.</p>

    <p>Ob Sie Support für Ihr Netzwerk benötigen, Beratung und Projektunterstützung wünschen 
    oder spezielle, auf Ihre Bedürfnisse entwickelte Software möchten – wir werden Ihnen helfen, 
    die für Sie richtige Lösung zu finden.</p>

    <p><strong class="highlight">Nehmen Sie Kontakt auf</strong> und wir besprechen alles Weitere.</p>
    </section>



  <!-- Leistungen -->
    <section id="services">
    <h2>Unsere Leistungen<hr class="hl"></h2>
    <div class="service-list">
      <div class="service" onclick="showDetail('hardware')">
        <h3>Hardware</h3>
        <p>(Platzhalter)</p>
        <p>(Beispiel-Bild)</p>
        <p>(Kurze Erklärung)</p>
      </div>
      <div class="service" onclick="showDetail('software')">
        <h3>Software</h3>
        <p>(Platzhalter)</p>
        <p>(Beispiel-Bild)</p>
        <p>(Kurze Erklärung)</p>
      </div>
      <div class="service" onclick="showDetail('beratung')">
        <h3>Beratung</h3>
        <p>(Platzhalter)</p>
        <p>(Beispiel-Bild)</p>
        <p>(Kurze Erklärung)</p>

      </div>
    </div>
  </section>


  <!-- Über uns -->
  <section id="about">
    <h2>Warum wir?    <hr class="hl"></h2>
    <ul>
      <li>(Platzhalter)</li>
      <li>(Wichtige eigene Informationen)</li>
      <li>(Mögliches eigenes Bild)</li>
    </ul>
  </section>

  <section id="opening-hours">
    <h2>Öffnungszeiten  <hr class="hl"></h2>
    <div class="opening-hours">
    <ul>
        <li><span>Montag</span><span>09:00 – 17:00</span></li>
        <li><span>Dienstag</span><span>09:00 – 17:00</span></li>
        <li><span>Mittwoch</span><span>09:00 – 17:00</span></li>
        <li><span>Donnerstag</span><span>09:00 – 17:00</span></li>
        <li><span>Freitag</span><span>13:00 – 17:00</span></li>
        <li><span>Samstag</span><span class="closed">Geschlossen</span></li>
        <li><span>Sonntag</span><span class="closed">Geschlossen</span></li>    
    </ul>
    </div>
  </section>


  <!-- Kontakt -->
  <section id="contact">
    <h2>Kontakt    <hr class="hl"></h2>
    <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
    <p>Telefon: <a href="tel:+49123456789">+49 123 456789</a></p>
    <p>E-Mail: <a href="mailto:info@ct-schmickler.de">info@ct-schmickler.de</a></p>
  </section>
  `;

  // Menübutton wieder aktivieren
  const menuBtn = document.querySelector('.menu-btn');
  const menuReiter = document.querySelector('.menu-reiter');
  menuBtn.addEventListener('click', () => {
    menuReiter.style.display = menuReiter.style.display === 'block' ? 'none' : 'block';
  });

  // Smooth Scroll wieder aktivieren
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  if(backButton == 1){
    services.scrollIntoView({ behavior: 'smooth' });
  }
  if(backButton == 2){
    footer.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initial anzeigen
showOverview();
