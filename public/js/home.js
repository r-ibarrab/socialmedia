let start=5;
const createPost=(postInfo)=>{
    return `
            <div class="post-header">
                <div class="user-info">
                    <h5 class="user-name">${postInfo.user}</h5>
                    <span></span>
                </div>
            </div>
        
            <div class="post-content">
                <div class="post-description">
                    <p>${postInfo.data}</p>
                </div>
                <div class="post-comments">
                    <a href="/post">${postInfo.number} comment(s)</a>
                </div>
                <div class="post-actions">
                    <span class="material-icons post-action">
                        favorite
                    </span>
                    <span class="material-icons post-action">
                        mode_comment
                    </span>                
                </div>
            </div> `
}


let options = {
    root: document.querySelector('.posts-container'),
    rootMargin: '0px',
    threshold: 0.5
}





const fetchData = async ()=>{
   
    const data = await fetch(`/api/posts/${start}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const fetchedData = await data.json();
    if(fetchedData.error){
        alert("error de datos")
    }else if(fetchedData.body.length>0){
        const $postsContainer = document.querySelector(".posts-wrapper")
            fetchedData.body.forEach((item)=>{
                const postCreated = createPost(item);
                const postElement = document.createElement("div")
                postElement.classList.add("post-container")
                postElement.innerHTML = postCreated;
                $postsContainer.append(postElement);
                
    
            })
        start = start + fetchedData.body.length;
        
    }
    console.log("Start: ",start)
    const cuadrocar = document.querySelector("#cuadro-carga");
    const loader = document.querySelector(".preloader");
    loader.remove()

  }

  const fetchPosts =  (entries, observer)=>{
    if(entries[0].isIntersecting){
        const cuadrocar = document.querySelector("#cuadro-carga");
        const loader = document.createElement("div");
        loader.classList.add("preloader");
        cuadrocar.append(loader)
       fetchData();
    }
}


  
let fetchObserver = new IntersectionObserver(fetchPosts, options);
let fetchComponent = document.querySelector("#cuadro-carga")
fetchObserver.observe(fetchComponent)