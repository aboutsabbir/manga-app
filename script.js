const APIURL = "https://mangamint.kaedenoki.net/api/manga/page/1";

const main = document.getElementById("main");

getManga(APIURL);
let arr = [1, 2, 3, 4, 5];

async function getManga(url){

        const resp = await fetch(url);
        const respData = await resp.json();

        showManga(respData.manga_list);
 
}


function showManga(mangas){

    main.innerHTML = '';

    mangas.forEach((manga) =>{

        const {chapter, title, thumb, updated_on} = manga;

        const mangaEl = document.createElement('div');
        mangaEl.classList.add('manga');

        mangaEl.innerHTML = `
            <div class="manga-info">
                <h4>${title}</h4>
                <span>${chapter}</span>
            </div>

            <img src="${thumb}"/>
        `
        console.log(title);
        main.appendChild(mangaEl);

    });
}