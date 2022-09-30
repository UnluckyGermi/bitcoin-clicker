var clicksound = document.getElementById('clicksound');
var itemsound = document.getElementById('buyitemsound');
var upgradesound = document.getElementById('buyupgradesound');

var globalmultiplier = 2;
var coins = 0;
var coinsps = 0;
var coinsonclick = 1;

var clickedcoins = 0;

var totalcoins = coins;

var chancebitcoin = 0.01;
var bitcoins = 0;

//VARIABLES DE UPGRADES======================================================================
var spritesupgrades = ["sprites/icons/005-owner.png", "sprites/icons/008-commodity.png", "sprites/icons/028-startup.png", "sprites/icons/015-investment.png", "sprites/icons/023-rental.png", "sprites/icons/022-real estate.png", "sprites/icons/029-stock.png", "sprites/icons/007-certificate.png", "sprites/icons/004-bottom.png", "sprites/icons/009-cryptocurrencies.png", "sprites/icons/003-bond.png", "sprites/icons/027-security.png", "sprites/icons/014-insurance.png", "sprites/icons/017-market.png", "sprites/icons/006-cash.png", "sprites/icons/002-bank.png", "sprites/icons/030-venture.png"];
var nameupgrades = ["Mejora de Personal", "Bolsa Infinita", "Fertilizante", "Cerdito de Porcelana", "Contratos Extendidos", "Barrios de Lujo", "Inversor Profesional", "Otra Carrera", "Otro Máster", "Blockchain", "Investigación", "Anonymus", "Super Firewall", "Tecnología 2050", "Galería de Arte", "Banco Nacional", "Éxito"];
var descriptionupgrades = ["¡Multiplica x2 tus ganancias con el asistente y el cursor!", "Multiplica x2 tus ganancias con la bolsa", "Multiplica x2 tus ganancias con la planta", "Multiplica x2 tus ganancias con el cerdito", "Multiplica x2 tus ganancias con el alquiler", "Multiplica x2 tus ganancias con la casa", "Multiplica x2 tus ganancias con el stock", "Multiplica x2 tus ganancias con la carrera", "Multiplica x2 tus ganancias con el máster", "Multiplica x2 tus ganancias con crypto", "Multiplica x2 tus ganancias con el doctorado", "Multiplica x2 tus ganancias con el pirateo", "Multiplica x2 tus ganancias con la seguridad", "Multiplica x2 tus ganancias el I+D", "Multiplica x2 tus ganancias con el museo", "Multiplica x2 tus ganancias con el banco", "Multiplica x2 tus ganancias con la fama"];
//-------------------------------------------------------------------------------------------
var upgrades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var unlockedupgrades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var colorupgrades = ["#9D9D9D", "#FF5CD7", "#5CFFF9", "#FFE85C"];
var requpgrades = [1, 5, 25, 50];
var upgradesprice = [100, 1000, 11000, 120000, 1300000, 14000000, 200000000, 3300000000, 51000000000, 750000000000, 10000000000000, 140000000000000, 1700000000000000, 21000000000000000, 260000000000000000, 3100000000000000000, 710000000000000000000,
                     500, 5000, 55000, 600000, 6500000, 70000000, 1000000000, 16500000000, 255000000000, 3750000000000, 50000000000000, 700000000000000, 8500000000000000, 105000000000000000, 1300000000000000000, 15500000000000000000, 3550000000000000000000,
                     10000, 50000, 550000, 6000000, 65000000, 700000000, 10000000000, 165000000000, 2550000000000, 37500000000000, 500000000000000, 7000000000000000, 85000000000000000, 1050000000000000000, 13000000000000000000, 155000000000000000000, 35500000000000000000000,
                     100000, 5000000, 55000000, 600000000, 6500000000, 70000000000, 1000000000000, 16500000000000, 3750000000000000, 50000000000000000, 700000000000000000, 8500000000000000000, 105000000000000000000, 1300000000000000000000, 15500000000000000000000, 3550000000000000000000000];

//===========================================================================================

var cursorupgrades = [0, 0, 0, 0];
var reqcursorupgrades = [1000, 100000, 10000000, 1000000000];
var cursorupgradesprice = [50000, 5000000, 500000000, 50000000000];
var unlockedcursorupgrades = [0, 0, 0, 0];

//VARIABLES DE ITEMS=========================================================================
var nameitems = ["ASISTENTE", "BOLSA", "PLANTA", "CERDITO", "ALQUILER", "CASA", "STOCK", "CARRERA", "MÁSTER", "CRYPTO", "DOCTORADO", "PIRATEO", "SEGURIDAD", "I+D", "MUSEO", "BANCO", "FAMA"];
var unlockcoins = [0, 100, 1100, 12000, 130000, 1400000, 20000000, 330000000, 5100000000, 75000000000, 1000000000000, 14000000000000, 170000000000000, 2100000000000000, 26000000000000000, 310000000000000000, 71000000000000000000];
//-------------------------------------------------------------------------------------------
var items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bps = [0.1, 1, 8, 47, 260, 1400, 7800, 44000, 260000, 1600000, 10000000, 65000000, 430000000, 2900000000, 21000000000, 150000000000, 1100000000000];
var price = [15, 100, 1100, 12000, 130000, 1400000, 20000000, 330000000, 5100000000, 75000000000, 1000000000000, 14000000000000, 170000000000000, 2100000000000000, 26000000000000000, 310000000000000000, 71000000000000000000];

//===========================================================================================
var increment = 1.15;

var FPS = 30;
var resetv = 0;

function reset(){
  resetv = 1;
  localStorage.clear();
  refresh();
}

function refresh(){
  location = location;
}

function saveData(){

  for(upgrade=0; upgrade < upgrades.length; upgrade++){
    localStorage.setItem('upgrade' + upgrade, JSON.stringify(upgrades[upgrade]));
    localStorage.setItem('unlockedupgrades' + upgrade, JSON.stringify(unlockedupgrades[upgrade]));
  }

  for(cursorupgrade=0; cursorupgrade < cursorupgrades.length; cursorupgrade++){
    localStorage.setItem('cursorupgrade' + cursorupgrade, JSON.stringify(cursorupgrades[cursorupgrade]));
    localStorage.setItem('unlockedcursorupgrades' + cursorupgrade, JSON.stringify(unlockedcursorupgrades[cursorupgrade]));
  }

  for(item=0; item < (items).length; item++){
    localStorage.setItem('item' + item, JSON.stringify(items[item]));
    localStorage.setItem('bps' + item, JSON.stringify(bps[item]));
    localStorage.setItem('price' + item, JSON.stringify(price[item]));
  }

  localStorage.setItem('clickedcoins', JSON.stringify(clickedcoins));
  localStorage.setItem('coins', JSON.stringify(coins));
  localStorage.setItem('coinsps', JSON.stringify(coinsps));
  localStorage.setItem('coinsonclick', JSON.stringify(coinsonclick));
  localStorage.setItem('totalcoins', JSON.stringify(totalcoins));
  localStorage.setItem('chancebitcoin', JSON.stringify(chancebitcoin));
  localStorage.setItem('bitcoins', JSON.stringify(bitcoins));
}

function loadData(){
  if(localStorage.getItem('coins') === null){
    return;
  }
  clickedcoins = JSON.parse(localStorage.getItem('clickedcoins'));
  coins = JSON.parse(localStorage.getItem('coins'));
  coinsps = JSON.parse(localStorage.getItem('coinsps'));
  coinsonclick = JSON.parse(localStorage.getItem('coinsonclick'));
  totalcoins = JSON.parse(localStorage.getItem('totalcoins'));
  chancebitcoin = JSON.parse(localStorage.getItem('chancebitcoin'));
  bitcoins = JSON.parse(localStorage.getItem('bitcoins'));

  for(item=0; item < items.length; item++){
    items[item] = JSON.parse(localStorage.getItem('item' + item));
    bps[item] = JSON.parse(localStorage.getItem('bps' + item));
    price[item] = JSON.parse(localStorage.getItem('price' + item));
  }
  for(upgrade=0; upgrade < upgrades.length; upgrade++){
    upgrades[upgrade] = JSON.parse(localStorage.getItem('upgrade' + upgrade));
    unlockedupgrades[upgrade] = JSON.parse(localStorage.getItem('unlockedupgrades' + upgrade));
  }
  for(cursorupgrade=0; cursorupgrade < cursorupgrades.length; cursorupgrade++){
    cursorupgrades[cursorupgrade] = JSON.parse(localStorage.getItem('cursorupgrade' + cursorupgrade));
    unlockedcursorupgrades[cursorupgrade] = JSON.parse(localStorage.getItem('unlockedcursorupgrades' + cursorupgrade));
  }
}


loadData();
setTimeout(updateUpgrades, 1);

function decimalAdjust(type, value, exp) {
    // Si el exp no está definido o es cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

if (!Math.round10) {
  Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
  };
}

function render(){

  document.getElementById("coinscounter").innerHTML = convert2(coins) + " (" + convertnotround(coinsps) + "/s)";
  document.getElementById("bitcoinscounter").innerHTML = convert2(bitcoins);

  checkUpgrades();
  updateColorsUpgrades();
  updateColorsCursorUpgrades();
  updateShop();
  priceColors();
  producir();

  if(resetv == 0){
    saveData();
  }


}

function clic(){

  if(Math.random() <= chancebitcoin){
    bitcoins++;
  }

  bonus = 0;
  for(cursorupgrade=0; cursorupgrade < cursorupgrades.length; cursorupgrade++){
    if(cursorupgrades[cursorupgrade] == 1){
      bonus+=coinsps*0.01;
    }
  }

  total = (coinsonclick*globalmultiplier)+bonus;

  coins+=total;
  totalcoins+=total;
  clickedcoins+=total;
  clicksound.play();
}

function producir(){
  coinsps = 0;
  for(item=0; item < items.length; item++){
    coinsps += items[item] * bps[item];
  }

  coinsps*=globalmultiplier;

  coins+=coinsps/FPS;
  totalcoins+=coinsps/FPS;
}

function convert(number){
  if(number >= 1000000000000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000000000000, -1) + "U";
  }
  if(number >= 1000000000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000000000, -1) + "d";
  }
  if(number >= 1000000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000000, -1) + "N";
  }
  if(number >= 1000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000, -1) + "o";
  }
  if(number >= 1000000000000000000000000){
    return Math.round10(number/1000000000000000000000000, -1) + "S";
  }
  if(number >= 1000000000000000000000){
    return Math.round10(number/1000000000000000000000, -1) + "s";
  }
  if(number >= 1000000000000000000){
    return Math.round10(number/1000000000000000000, -1) + "Q";
  }
  if(number >= 1000000000000000){
    return Math.round10(number/1000000000000000, -1) + "q";
  }
  if(number >= 1000000000000){
    return Math.round10(number/1000000000000, -1) + "T";
  }
  if(number >= 1000000000){
    return Math.round10(number/1000000000, -1) + "B";
  }
  else if(number >= 1000000){
    return Math.round10(number/1000000, -1) + "M";
  }
  else if(number >= 1000){
    return Math.round10(number/1000, -1) + "k";
  }
  else{
    return Math.floor(number);
  }
}

function convert2(number){
  if(number >= 1000000000000000000000000000000000000){
    num = Math.round10(number/1000000000000000000000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0U";
    }
    return num + "U";
  }
  if(number >= 1000000000000000000000000000000000){
    num = Math.round10(number/1000000000000000000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0d";
    }
    return num + "d";
  }
  if(number >= 1000000000000000000000000000000){
    num = Math.round10(number/1000000000000000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0N";
    }
    return num + "N";
  }
  if(number >= 1000000000000000000000000000){
    num = Math.round10(number/1000000000000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0o";
    }
    return num + "o";
  }
  if(number >= 1000000000000000000000000){
    num = Math.round10(number/1000000000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0S";
    }
    return num + "S";
  }
  if(number >= 1000000000000000000000){
    num = Math.round10(number/1000000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0s";
    }
    return num + "s";
  }
  if(number >= 1000000000000000000){
    num = Math.round10(number/1000000000000000000, -1);
    if(num%1 == 0){
      return num + ".0Q";
    }
    return num + "Q";
  }
  else if(number >= 1000000000000000){
    num = Math.round10(number/1000000000000000, -1);
    if(num%1 == 0){
      return num + ".0q";
    }
    return num + "q";
  }
  else if(number >= 1000000000000){
    num = Math.round10(number/1000000000000, -1);
    if(num%1 == 0){
      return num + ".0T";
    }
    return num + "T";
  }
  else if(number >= 1000000000){
    num = Math.round10(number/1000000000, -1);
    if(num%1 == 0){
      return num + ".0B";
    }
    return num + "B";
  }
  else if(number >= 1000000){
    num = Math.round10(number/1000000, -1);
    if(num%1 == 0){
      return num + ".0M";
    }
    return num + "M";
  }
  else if(number >= 1000){
    num = Math.round10(number/1000, -1);
    if(num%1 == 0){
      return num + ".0k";
    }
    return num + "k";
  }
  else{
    return Math.floor(number);
  }
}

function convertnotround(number){
  if(number >= 1000000000000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000000000000, -1) + "U";
  }
  if(number >= 1000000000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000000000, -1) + "d";
  }
  if(number >= 1000000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000000, -1) + "N";
  }
  if(number >= 1000000000000000000000000000){
    return Math.round10(number/1000000000000000000000000000, -1) + "o";
  }
  if(number >= 1000000000000000000000000){
    return Math.round10(number/1000000000000000000000000, -1) + "S";
  }
  if(number >= 1000000000000000000000){
    return Math.round10(number/1000000000000000000000, -1) + "s";
  }
  if(number >= 1000000000000000000){
    return Math.round10(number/1000000000000000000, -1) + "Q";
  }
  if(number >= 1000000000000000){
    return Math.round10(number/1000000000000000, -1) + "q";
  }
  if(number >= 1000000000000){
    return Math.round10(number/1000000000000, -1) + "T";
  }
  if(number >= 1000000000){
    return Math.round10(number/1000000000, -1) + "B";
  }
  else if(number >= 1000000){
    return Math.round10(number/1000000, -1) + "M";
  }
  else if(number >= 1000){
    return Math.round10(number/1000, -1) + "k";
  }
  else{
    return Math.round10(number, -1);
  }
}

function canBuy(item){
  return (coins >= price[item]);
}

function canBuyUpgrade(upgrade){
  return (coins >= upgradesprice[upgrade]);
}

function canBuyCursorUpgrade(cursorupgrade){
  return (coins >= cursorupgradesprice[cursorupgrade]);
}

function priceColors() {

  for(item=0; item < items.length; item++){
    if(canBuy(item)){
      document.getElementById("price" + item).style.color = 'green';
    }
    else{
      document.getElementById("price" + item).style.color = 'red';
    }
  }
}

function updateColorsUpgrades(){
  for(upgrade=0; upgrade < unlockedupgrades.length; upgrade++){
    if(unlockedupgrades[upgrade] == 1 && upgrades[upgrade] == 0){
      priceColorsUpgrades(upgrade);
    }
  }
}

function updateColorsCursorUpgrades(){
  for(cursorupgrade=0; cursorupgrade < unlockedcursorupgrades.length; cursorupgrade++){
    if(unlockedcursorupgrades[cursorupgrade] == 1 && cursorupgrades[cursorupgrade] == 0){
      priceColorsCursorUpgrades(cursorupgrade);
    }
  }
}

function priceColorsUpgrades(upgrade){

  if(canBuyUpgrade(upgrade)){
    document.getElementById("priceupgrade" + upgrade).style.color = 'green';
    document.getElementById("tooltip" + upgrade).style.border = '2px solid green';
    document.getElementById("upgradebutton" + upgrade).style.border = '2px solid green';
  }
  else{
    document.getElementById("priceupgrade" + upgrade).style.color = 'red';
    document.getElementById("tooltip" + upgrade).style.border = '2px solid red';
    document.getElementById("upgradebutton" + upgrade).style.border = '2px solid red';
  }

}

function priceColorsCursorUpgrades(cursorupgrade){
  if(canBuyCursorUpgrade(cursorupgrade)){
    document.getElementById("pricecursorupgrade" + cursorupgrade).style.color = 'green';
    document.getElementById("cursortooltip" + cursorupgrade).style.border = '2px solid green';
    document.getElementById("cursorupgradebutton" + cursorupgrade).style.border = '2px solid green';
  }
  else{
    document.getElementById("pricecursorupgrade" + cursorupgrade).style.color = 'red';
    document.getElementById("cursortooltip" + cursorupgrade).style.border = '2px solid red';
    document.getElementById("cursorupgradebutton" + cursorupgrade).style.border = '2px solid red';
  }
}

function buyUpgrade(upgrade){
  if(coins >= upgradesprice[upgrade] && upgrades[upgrade] == 0){
    coins-=upgradesprice[upgrade];
    upgrades[upgrade] = 1;
    upgradesound.play();
    document.getElementById("upgrade" + upgrade).innerHTML = "";
    if(upgrade >= items.length){
      upgrade = upgrade%items.length;
    }
    bps[upgrade]*=2;
    if(upgrade == 0){
      coinsonclick*=2;
    }
  }
}

function buyCursorUpgrade(cursorupgrade){
  if(coins >= cursorupgradesprice[cursorupgrade] && cursorupgrades[cursorupgrade] == 0){
    coins -= cursorupgradesprice[cursorupgrade];
    cursorupgrades[cursorupgrade] = 1;
    upgradesound.play();
    document.getElementById("cursorupgrade" + cursorupgrade).innerHTML = "";

  }
}

function updateShop(){
  for(item=0; item < items.length; item++) {
    if(totalcoins >= unlockcoins[item]) {
      document.getElementById("price" + item).innerHTML = convert(price[item]) + "$";
      document.getElementById("item" + item).innerHTML = nameitems[item] + " (" + items[item] +")";
      document.getElementById("ps" + item).innerHTML = "+" + convertnotround(bps[item]*globalmultiplier) + " coins/s";
    }
  }
}

function checkUpgrades(){
  for(upgrade=0; upgrade < upgrades.length; upgrade++){
    auxupgrade = upgrade;
    if(upgrade >= items.length){
      auxupgrade = upgrade%items.length;
    }
    if(items[auxupgrade] >= (requpgrades[Math.floor(upgrade/items.length)]) && upgrades[upgrade] == 0 && unlockedupgrades[upgrade] == 0){
      unlockedupgrades[upgrade] = 1;
      updateUpgrades();
    }
  }

  for(cursorupgrade=0; cursorupgrade < cursorupgrades.length; cursorupgrade++){
    if(clickedcoins >= reqcursorupgrades[cursorupgrade] && cursorupgrades[cursorupgrade] == 0 && unlockedcursorupgrades[cursorupgrade] == 0){
      unlockedcursorupgrades[cursorupgrade] = 1;
      updateUpgrades();
    }
  }
}

function updateUpgrades(){
  document.getElementById("upgrades").innerHTML = "";
  for(upgrade=0; upgrade < upgrades.length; upgrade++){
    auxupgrade = upgrade;
    if(upgrade >= items.length){
      auxupgrade=upgrade%items.length;
    }
    if(unlockedupgrades[upgrade] == 1 && upgrades[upgrade] == 0){
      document.getElementById("upgrades").innerHTML +=
      "<li id='upgrade" + upgrade + "'><button id='upgradebutton" + upgrade + "' class='tooltip' onclick='buyUpgrade(" + upgrade + ")'><div id='tooltip" + upgrade + "' class='tooltiptext'><b>"+nameupgrades[auxupgrade]+ " " + Math.floor(upgrade/items.length+1) + "</b><br>"+descriptionupgrades[auxupgrade]+"<div id='priceupgrade"+upgrade+"'>" + convert(upgradesprice[upgrade]) + "$</div></div><img src='"+ spritesupgrades[auxupgrade] +"' width='68px'/></button></li>";
      document.getElementById("upgradebutton" + upgrade).style.background = colorupgrades[Math.floor(upgrade/items.length)];
    }
  }
  for(cursorupgrade=0; cursorupgrade < cursorupgrades.length; cursorupgrade++){
    if(unlockedcursorupgrades[cursorupgrade] == 1 && cursorupgrades[cursorupgrade] == 0){
      document.getElementById("upgrades").innerHTML +=
      "<li id='cursorupgrade" + cursorupgrade + "'><button id='cursorupgradebutton" + cursorupgrade + "' class='tooltip' onclick='buyCursorUpgrade(" + cursorupgrade + ")'><div id='cursortooltip" + cursorupgrade + "' class='tooltiptext'><b>"+ "Mejora de cursor " + (cursorupgrade+1) + "</b><br>"+"¡Gana +1% de tus coins/s al hacer click!"+"<div id='pricecursorupgrade"+cursorupgrade+"'>" + convert(cursorupgradesprice[cursorupgrade]) + "$</div></div><img src='sprites/icons/cursor.png' width='68px'/></button></li>";
      document.getElementById("cursorupgradebutton" + cursorupgrade).style.background = colorupgrades[cursorupgrade];
    }
  }
}

function comprar(item) {

  if(coins >= price[item]){
    items[item]++;
    coins -= price[item];
    price[item]*=increment;
    itemsound.play();
  }
  }



setInterval(function(){
  render();
},1000/FPS);
