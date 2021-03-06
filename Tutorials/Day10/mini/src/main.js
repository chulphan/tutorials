class Blog {
    constructor() {
        this.clicked = false;
        this.setInit();
        this.registerEvents();
        this.likeSet = new Set();
    }

    setInit() {
        this.blogList = document.querySelector("#container > ul");
    }

    registerEvents() {
        const startBtn = document.querySelector('#fetch-btn');

        const dataURL = '../data/data.json';
        startBtn.addEventListener("click", () => {
            if (this.clicked === false) {
                this.setInitData(dataURL);
                this.clicked = true;
            } else {
                this.blogList.innerHTML = "";
                this.clicked = false;
            }
        });

        this.blogList.addEventListener("click", ({ target }) => {
            let className = target.className;
            
            if(className !== "like" && className != "unlike") return;

            if (className !== 'like') { // unlike.
                target.className = 'like';
                target.innerHTML = '찜하기';
                const title = target.previousElementSibling.textContent;
                this.likeSet.delete(title);
            } else {
                target.className = 'unlike';
                target.innerHTML = '찜취소';
                const title = target.previousElementSibling.textContent;
                this.likeSet.add(title);
            }
            this.updateLikeList();
        })
    }

    updateLikeList() {
        const ul = document.querySelector("#like-box > ul");
        console.log('updateLikeList is clicked.');
        let likeListText = "";
        this.likeSet.forEach((like) => {
            likeListText += `<li>${like}</li>`;
        })

        ul.innerHTML = likeListText;
    }

    setInitData(dataURL) {
        this.getData(dataURL, this.printPosts.bind(this)); // 왜 this가 풀리지??
    }


    getData(dataURL, printFtn) {
        const oReq = new XMLHttpRequest();

        oReq.addEventListener("load", () => {
            const list = JSON.parse(oReq.responseText);
            const newList = Array.from(list.body);
            printFtn(newList);
        });

        oReq.open('GET', dataURL);
        oReq.send();
    }

    printPosts(list) {
        list.forEach((content) => {
            this.blogList.innerHTML += `<li><a href="${content.link}">${content.title}</a><a href="#" class="like">찜하기</a></li>`
        })
    }
}

export default Blog;