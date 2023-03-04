
let selectionStack = [];
let menuStack = [];
let player = false;
let found = false;

function setTexts(data) {
  $('#intro').text(data.intro);
  $('#intro').effect("shake", { direction: "up", times: 1, distance: 4}, 200 );
  $('#name').text(data.name);
  $('#name').delay(20).effect("shake", { direction: "up", times: 1, distance: 4}, 200 );
  $('#desc').html(data.desc);
  $('#desc').delay(40).effect("shake", { direction: "up", times: 1, distance: 4}, 200 );
  let linkDiv = $('.links');
  linkDiv.empty();
  if (data.links.length == 0) linkDiv.append('<span class="separator"> / </span>');
  for (link of data.links) {
    if (link.link) linkDiv.append(`<a target="_blank" href="${link.link}"><i class="fa fa-${link.icon}"></i> ${link.text}</a>`);
    else linkDiv.append(`<a href="#"><i class="fa fa-${link.icon}"></i> ${link.text}</a>`);
    
    linkDiv.append('<span class="separator"> / </span>');
  }
  linkDiv.children().last().css('opacity', '0');
  // update color as well
  $("body").get(0).style.setProperty("--theme", data.color);
}

function setMenu(items, selected) {
  let menu = $(".menu");
  menu.empty();
  setTexts(items[0]);
  for (let i = 0; i < items.length; i++) {
    if (i == selected) menu.append(`<p class="selected ${items[i].submenu ? 'arrow' : ''}">${items[i].name}</p>`);
    else menu.append(`<p class="${items[i].submenu ? 'arrow' : ''}">${items[i].name}</p>`);
  }
}

function intoMenu(items) {
  menuStack.push(items);
  selectionStack.push(0);
  setMenu(items, 0);
}

function outofMenu() {
  if (selectionStack.length > 1) {
    selectionStack.pop();
    menuStack.pop();
    let currentMenu = menuStack[menuStack.length - 1];
    setMenu(currentMenu, selectionStack[selectionStack.length - 1]);
  }
}

function menuSelection(direction) {
  let menu = $(".menu.active");
  if (menu) {
    let currentSelection = selectionStack[selectionStack.length-1];
    let menuData = menuStack[menuStack.length-1];
    let maxMenu = menuData.length - 1;

    // update selection
    let children = menu.children();
    children.get(currentSelection).classList.remove('selected');
    currentSelection += direction;
    if (currentSelection < 0) currentSelection = maxMenu;
    if (currentSelection > maxMenu) currentSelection = 0;
    children.get(currentSelection).classList.add('selected');
    selectionStack[selectionStack.length-1] = currentSelection;

    // update texts;
    setTexts(menuData[currentSelection]);

    // scroll to
    menu.scrollTop($(".selected").position().top); // Scroll screen to target element
  }
}

function enterPlayer(data) {
  let artist = data.artist;
  if (artist) {
    // achievements lol
    if (!found) {
      found = true;
      catTalk("press 'menu' to go back!")
    }
    player = true;
    progress = 0;
    increment = 0.1;
    $('.menubar').text("Now Playing");
    $('.play-artist').html(data.name + "<br><br>" + artist);
    $('.play').show();
    $('.menu').hide();
    $('.menu').removeClass('active');
    $('.cover').attr("src", `/assets/${data.name.toLowerCase()}.png`);
  }

  playPlayer();
}

function exitPlayer() {
  progress = -1;
  $progressBar.css('width', `0%`);
  $('.menubar').text("iPod");
  player = false;
  $('.play').hide();
  $('.menu').show();
  $('.menu').addClass('active');
}

// Button control
$(".btn-down").click((e) => {
  if (!player) menuSelection(1);
  else increment = increment == 0 ? 0.1 : 0;
});

$(".btn-up").click((e) => {
  if (!player) menuSelection(-1);
  // exit player
  else exitPlayer();
});

$(".btn-center").click((e) => {
  if (!player) {
    let currentSelection = selectionStack[selectionStack.length-1];
    let menuData = menuStack[menuStack.length-1];
    if (menuData[currentSelection].submenu)
      intoMenu(menuData[currentSelection].submenu);
    else
      enterPlayer(menuData[currentSelection]);
  }
});

$(".btn-right").click((e) => {
  if (!player) {
    let currentSelection = selectionStack[selectionStack.length-1];
    let menuData = menuStack[menuStack.length-1];
    if (menuData[currentSelection].submenu)
      intoMenu(menuData[currentSelection].submenu);
    else
      enterPlayer(menuData[currentSelection]);
  }
  else progress = Math.min(100, progress + 20);
});

$(".btn-left").click((e) => {
  if (!player) outofMenu();
  else progress = Math.max(0, progress - 20);
});

// Cat functionality
function catTalk(msg, time) {
  if (msg) $(".cat-tooltip").text(msg);
  $(".cat-tooltip").show();
  $(".cat-tooltip").effect("shake", { direction: "up", times: 1, distance: 4}, 200 );
  $(".cat-tooltip").delay(time || 3000).fadeOut(200);
}

$(".cat").click(() => {
  catTalk(null);
});

// player
var $progressBar = $('.progress-bar');

var progress = 0;      // initial value of your progress bar
var timeout = 50;      // number of milliseconds between each frame
var increment = .1;    // increment for each frame
var maxprogress = 100; // when to leave stop running the animation

function playPlayer() {
    setTimeout(function () {
        progress += increment;
        if(progress < maxprogress && progress > 0) {
            $progressBar.css('width', `${progress}%`);
            playPlayer();
        }
    }, timeout);
};

$(document).ready(() => {
  intoMenu(data);
  catTalk("pssst press buttons on iPod :3", 6000);
});