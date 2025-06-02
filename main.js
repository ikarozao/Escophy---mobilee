import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

let map;
class OLComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'theme/ol.css');
    this.shadow.appendChild(link);
    const style = document.createElement('style');
    style.innerText = `
      :host {
        display: block;
      }
    `;
    this.shadow.appendChild(style);
    const mapTarget = document.createElement('div');
    mapTarget.style.width = '100%';
    mapTarget.style.height = '100%';
    this.shadow.appendChild(mapTarget);

    this.map = new Map({
      target: mapTarget,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
}

customElements.define('ol-map', OLComponent);
