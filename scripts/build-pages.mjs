import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const pages = [
  {
    route: 'about/about-yokayo', title: 'What We Do', kicker: 'About Yokayo', image: 'facility.jpg',
    deck: 'A modern custom crush operation on the Yokayo Bench, built to help wineries and growers make better wine without carrying every piece of infrastructure themselves.',
    body: `<h2>About Yokayo</h2><p class="lead">On the Yokayo Bench in northern Ukiah Valley sits a custom crush operation serving wineries and growers throughout California.</p><p>Since 2008, Yokayo Wine Company has focused on producing wine from grapes grown across the North Coast and throughout the state. The team brings together farmers, winemakers, vineyards, and a flexible production facility so programs both small and large can move from fruit to finished wine.</p><h2>Our expertise</h2><p>Yokayo can secure fruit through Pauli Family estate vineyards and grower partners, then make wine at its Ukiah facility just minutes from Highway 101. Clients may add volume to an existing brand, add a new variety without investing in more vineyards or tanks, or ask Yokayo to execute proprietary winemaking protocols.</p><p>When a crush pad breaks down or becomes backed up, Yokayo can process fruit and ship it later for finishing. Growers with unsold grapes can also use the custom crush operation.</p><div class="fact-grid"><article><strong>2008</strong><span>Yokayo established</span></article><article><strong>5 AVAs</strong><span>Pauli farming footprint</span></article><article><strong>101</strong><span>Minutes from the highway</span></article></div>`
  },
  {
    route: 'about/the-pauli-family', title: 'The Pauli Family', kicker: 'Four generations in Mendocino County', image: 'pauli-family.jpg',
    deck: 'A family farming story that begins with pears and dairy, grows through North Coast vineyards, and leads to a modern custom wine production company.',
    body: `<h2>Rooted in Potter Valley</h2><p class="lead">The Pauli Family owns and operates Yokayo Wine Company and has a long history in Mendocino County.</p><p>The family began farming in Potter Valley in the 1920s after moving from Willits, where they had settled in the 1850s. Early generations farmed Bartlett pears and operated a small dairy. In the 1970s, Bill Pauli planted the family's first wine grape vineyard.</p><div class="media-pair"><figure><img src="../../assets/images/pauli-1905.jpg" alt="Historic Pauli family photograph from 1905"><figcaption>Pauli Family, 1905</figcaption></figure><figure><img src="../../assets/images/pauli-family.jpg" alt="The Pauli family in 2015"><figcaption>Pauli Family, 2015</figcaption></figure></div><p>Bill, his wife Janet, and their five children farm pears and vineyards in five AVAs across three counties. Their vineyards include 13 varieties, including Pinot Noir, Chardonnay, Sauvignon Blanc, and Cabernet Sauvignon. The vineyards are certified sustainable under the Fish Friendly Farming program.</p><h2>Bill Pauli, founder</h2><p>Bill Pauli began working in the wine industry in the 1970s. After graduating from the University of Nevada, Reno, he created a farm management company focused on wine grapes while taking over management of the family farm. In 2008, Bill, Janet, and their five grown children constructed Yokayo Wine Company.</p><p>Bill's industry experience includes leadership at Souverain Winery, Saint Genevieve Winery, and Redwood Valley Cellars. He served as President of the California Farm Bureau, chaired the California Association of Wine Grape Growers, and has served the Potter Valley Volunteer Fire Department for decades.</p><p>His recognition includes Mendocino County Agriculturist of the Year, the California Farm Bureau Federation Distinguished Service Award, and State of California Agriculturist of the Year.</p>`
  },
  {
    route: 'custom-crush/the-crush-facility', title: 'The Crush Facility', kicker: 'Harvest infrastructure', image: 'press.jpg',
    deck: 'Receive faster, process more than 500 tons of fruit per day, and match storage to the lot instead of forcing the lot to fit the tank.',
    body: `<h2>Built to keep fruit moving</h2><p class="lead">Yokayo provides custom crushing for growers and wineries throughout California.</p><p>An on-site 72-foot certified scale makes receiving quick and documented. The Ukiah facility sits minutes from Highway 101. Twin Bucher XP 320 presses and a Bucher Delta E8 destemmer-crusher support processing of more than 500 tons of fruit per day.</p><div class="fact-grid"><article><strong>500+</strong><span>Tons per day</span></article><article><strong>72 FT</strong><span>Certified scale</span></article><article><strong>2.3M</strong><span>Gallons total capacity</span></article></div><h2>Tanks</h2><p>Tank capacity ranges from 1,000 to 30,000 gallons with red and white fermentation options. A multi-size breakdown system helps keep tanks topped during storage. All tanks have cooling jackets, and insulated tanks are available for long-term storage.</p><h2>Scale</h2><p>The state-certified drive-in and drive-out scale supports efficient shipping and transfer while giving growers documented measurements for shipments into the facility.</p><h2>Press</h2><p>The Bucher bladder press is designed for consistent must quality and accommodates white grape loads from 15 to 60 tons.</p><div class="media-pair"><figure><img src="../../assets/images/tanks.jpg" alt="Rows of stainless steel tanks at Yokayo Wine Company"><figcaption>Flexible tank capacity</figcaption></figure><figure><img src="../../assets/images/scale.jpg" alt="The certified receiving scale at Yokayo Wine Company"><figcaption>Documented receiving</figcaption></figure></div>`
  },
  {
    route: 'custom-winemaking/winemaking', title: 'Custom Winemaking', kicker: 'Your protocol or ours', image: 'tanks.jpg',
    deck: 'Scale a current brand, launch a new label, secure bulk wine, or bring a proprietary protocol to a team equipped to execute it.',
    body: `<h2>Flexible by design</h2><p class="lead">Yokayo serves winery clients ranging from very small to very large.</p><p>The facility can support bulk wine for an existing brand, custom production for a new label, and programs that require a specific protocol. Clients may use Yokayo's comprehensive winemaking program or provide proprietary winemaking instructions for the team to follow.</p><p>An on-site laboratory and blending room support scientific and sensory analysis throughout the process.</p><h2>Experience on the floor</h2><p>Head Winemaker David Rosenthal brings decades of experience and a deep understanding of the factors that influence a wine's flavor profile. That knowledge supports every program made at Yokayo.</p><div class="fact-grid"><article><strong>Small</strong><span>Precision lots</span></article><article><strong>Large</strong><span>Production programs</span></article><article><strong>Exact</strong><span>Client protocols</span></article></div>`
  },
  {
    route: 'custom-winemaking/our-winemaker', title: 'David Rosenthal', kicker: 'General Manager and Director of Winemaking', image: 'david-rosenthal.jpg',
    deck: 'Fermentation science, broad varietal experience, and decades of practical cellar leadership applied to every client program.',
    body: `<h2>Our winemaker</h2><p class="lead">David Rosenthal brings a career of North Coast winemaking and operational leadership to Yokayo Wine Company.</p><p>Before joining Yokayo, David served as Director of Winemaking and General Manager at Redwood Valley Cellars. He also worked as a winemaker at Konocti Vineyards and Buena Vista Winery.</p><p>David earned a Bachelor of Science in Fermentation Science from the University of California, Davis in 1979. He began his winemaking career at Konocti Winery, a 28-grower cooperative in Lake County.</p><p>At Konocti and later at Buena Vista Winery in Carneros, David made a wide range of varietal wines under the guidance of winemaking legend Andre Tchelistcheff. His experience has produced a deep understanding of the many factors that shape a wine's flavor profile.</p>`
  },
  {
    route: 'vineyards/our-vineyards', title: 'Our Vineyards', kicker: 'Five AVAs, three counties', image: 'vineyards.jpg',
    deck: 'Estate vineyards and grower relationships connect each program to the fruit, soil, variety, and region it actually needs.',
    body: `<h2>Range across the North Coast</h2><p class="lead">Yokayo has access to North Coast wine grapes farmed by the Pauli Family across five AVAs in three counties.</p><p>Valley-floor ranches with deep, dark soils support Chardonnay, Sauvignon Blanc, Riesling, Gewürztraminer, Grenache, and Merlot. Foothill ranches range from volcanic red soil to light gravelly loam and support Cabernet Sauvignon, Pinot Noir, Syrah, Malbec, Sangiovese, and Barbera.</p><h2>Certified sustainable</h2><p>Pauli Family vineyards are certified sustainable through the Fish Friendly Farming program. In 2024, the family received the Next Wave of Sustainability Award from the California Land Institute.</p><div class="media-pair"><figure><img src="../../assets/images/harvest.jpg" alt="Harvest activity in a Pauli Family vineyard"><figcaption>Harvest across multiple AVAs</figcaption></figure><figure><img src="../../assets/images/vines.jpg" alt="Rows of vines in a North Coast vineyard"><figcaption>Valley floor and hillside sites</figcaption></figure></div>`
  },
  {
    route: 'vineyards/grape-supply-options', title: 'Grape Supply Options', kicker: 'Find the fruit the program requires', image: 'harvest.jpg',
    deck: 'A specific variety, AVA, or regional expression should not be limited to what happens to be in one vineyard portfolio.',
    body: `<h2>Source to specification</h2><p class="lead">Yokayo frequently works with winery clients who need wine made from a particular variety, AVA, or region.</p><p>When the right fruit is not available from Pauli Family estate vineyards, Yokayo searches through grower relationships for grapes that meet the winery's requirements. Each year, the company purchases fruit from growers throughout California as a service to client wineries.</p><p>Flexibility is the objective: match the fruit to the wine program, then connect sourcing directly to crush, winemaking, and storage capacity.</p>`
  },
  {
    route: 'contact/contact-us', title: 'Contact Production', kicker: 'Tour the facility or discuss a program', image: 'facility.jpg',
    deck: 'Members of the wine industry are invited to ask about the facility, services, available capacity, or a scheduled tour.',
    body: `<h2>Start with the production desk</h2><p class="lead">Tell Yokayo what needs to move: fruit, overflow, a new variety, additional brand volume, storage, or a complete winemaking program.</p><div class="fact-grid"><article><strong>Call</strong><span><a href="tel:+17074633366">707 463 3366</a></span></article><article><strong>Fax</strong><span>707 463 3356</span></article><article><strong>Visit</strong><span>301 W Lake Mendocino Dr, Ukiah, CA 95482</span></article></div><p>No online form is active in this staged preview. Production contact delivery will be connected and verified before any replacement of the current website.</p>`
  },
  {
    route: 'cookie-policy', title: 'Cookie Policy', kicker: 'Staged preview', image: 'ranch.jpg',
    deck: 'This preview is intentionally simple and does not use analytics, advertising, account, comment, or marketing cookies.',
    body: `<h2>Preview behavior</h2><p class="lead">The Yokayo preview does not set analytics or marketing cookies and does not collect information through an online form.</p><p>The production site's cookie inventory and consent behavior will be reviewed against the final hosting, analytics, form, and account configuration before a cutover. A policy will describe only the cookies the released site actually uses.</p>`
  }
];

const aliases = {
  'about': 'about/about-yokayo/',
  'custom-crush': 'custom-crush/the-crush-facility/',
  'custom-crush/growers': 'custom-crush/the-crush-facility/',
  'custom-winemaking': 'custom-winemaking/winemaking/',
  'vineyards': 'vineyards/our-vineyards/',
  'vineyards/winemaking-capacity': 'custom-winemaking/winemaking/',
  'contact': 'contact/contact-us/',
  'contact/get-started': 'contact/contact-us/'
};

function relPrefix(route) {
  return '../'.repeat(route.split('/').length);
}

function shell(page) {
  const p = relPrefix(page.route);
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${page.deck.replaceAll('"', '&quot;')}"><meta name="robots" content="noindex, nofollow"><title>${page.title} | Yokayo Wine Company</title><link rel="stylesheet" href="${p}styles.css?v=20261023-4"></head>
<body><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="${p}" aria-label="Yokayo Wine Company home"><img src="${p}assets/images/logo.svg" alt="Yokayo Wine Company"></a><button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button><nav id="primary-nav" aria-label="Primary navigation"><a href="${p}custom-crush/the-crush-facility/">Custom crush</a><a href="${p}custom-winemaking/winemaking/">Winemaking</a><a href="${p}vineyards/our-vineyards/">Vineyards</a><a href="${p}about/about-yokayo/">About</a><a class="nav-cta" href="${p}contact/contact-us/">Start a conversation</a></nav></header>
<main id="main"><section class="page-hero"><div class="page-hero-copy"><p class="eyebrow">${page.kicker}</p><h1>${page.title}</h1><p>${page.deck}</p></div><img src="${p}assets/images/${page.image}" alt=""></section><section class="content-layout"><aside class="content-index"><strong>Explore Yokayo</strong><a href="${p}about/the-pauli-family/">Pauli family</a><a href="${p}custom-winemaking/our-winemaker/">Winemaker</a><a href="${p}vineyards/grape-supply-options/">Grape supply</a><a href="${p}contact/contact-us/">Contact</a></aside><div class="content-body">${page.body}</div></section><section class="action-band"><p>Bring the fruit, the protocol, or the production pressure.</p><a class="button button-dark" href="${p}contact/contact-us/">Contact production</a></section></main>
<footer><div><strong>Yokayo Wine Company</strong><span>Custom production for the North Coast wine industry.</span></div><div class="footer-links"><a href="${p}">Home</a><a href="tel:+17074633366">707 463 3366</a></div></footer><script src="${p}script.js"></script></body></html>`;
}

for (const page of pages) {
  const dir = path.join(root, page.route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), shell(page), 'utf8');
}

for (const [route, destination] of Object.entries(aliases)) {
  const dir = path.join(root, route);
  fs.mkdirSync(dir, { recursive: true });
  const fromDepth = route.split('/').length;
  const target = '../'.repeat(fromDepth) + destination;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><meta http-equiv="refresh" content="0; url=${target}"><title>Yokayo Wine Company</title></head><body><p><a href="${target}">Continue to Yokayo Wine Company</a></p></body></html>`;
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

console.log(`Generated ${pages.length} content pages and ${Object.keys(aliases).length} route aliases.`);
