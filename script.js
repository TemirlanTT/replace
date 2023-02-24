
function searchWord()
{
    let searchWord = document.getElementById('search').value;
    let text = document.getElementById('txt').innerText;
    let pattern = new RegExp(searchWord, 'gi');

    let new_text = text.replace(pattern, 
        `<span style="background-color: red;">${searchWord}</span>`
    );

    document.getElementById('txt').innerHTML = new_text;
}

function replaceWord() {
    let searchWord = document.getElementById('search').value;
    let replaceWord = document.getElementById('replace').value;
    let text = document.getElementById('txt').innerText;
    let pattern = new RegExp(searchWord, 'gi');
  
    let new_text = text.replace(pattern, 
      `<span style="background-color: yellow;">${replaceWord}</span>`
    );
  
    document.getElementById('txt').innerHTML = new_text;
  }
  










