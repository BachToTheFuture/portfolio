
// from https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser
function randomHaiku(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var haikus = allText.split(/\r?\n\n/);
                let haiku = haikus[Math.floor(Math.random() * haikus.length)];
                $('.haiku').html(haiku.replace(/(?:\r\n|\r|\n)/g, '<br>'));
            }
        }
    }
    rawFile.send(null);
}

$(document).ready(() => {
  randomHaiku("assets/haiku.txt");
});
