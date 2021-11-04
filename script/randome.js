async function getdata(url) {
    console.log(url)
    let res = await fetch(url);
    let data = await res.json();
    console.log('anny',data);
    return data;

}
function append(data,container){
    // console.log('anny')
    data.forEach(({title,image})=>{
        let div = document.createElement('div')
        let p=document.createElement('p')

        p.innerText=title;

        let img = document.createElement('img')
        img.src=image;

        div.append(img,p);

        container.append(div);
    })

}
export {getdata,append}