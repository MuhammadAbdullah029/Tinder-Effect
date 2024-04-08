// get the data

let users = [
    {
    profilePic: "/media/pr1.webp",
    displayPic: "/media/pexels-agafonova-photo-5477855.webp", 
    penddingMessage: 4, 
    location: "Munich, Germany", 
    name: "Jessica", 
    age: 21, 
    interests: [
        {
            icon: `<i class="text-sm ri-music-2-fill"></i>`,
            interest: "Music"
        },
        {
            icon: `<i class="text-sm ri-quill-pen-fill"></i>`,
            interest: "writing"
        },
    
    ],
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ullam corrupti in voluptatem unde nihil.",
    isFreind: null
    },

    {
        profilePic: "/media/pr3.webp", 
        displayPic: "/media/pexels-cottonbro-studio-5473962.webp",
        penddingMessage: 7, 
        location: "Funchal, Portugal", 
        name: "Emili", 
        age: 19, 
        interests: [
            {
                icon: `<i class="text-sm ri-gamepad-fill"></i>`,
                interest: "Video Games"
            },
            {
                icon: `<i class="text-sm ri-quill-pen-fill"></i>`,
                interest: "Painting"
            },
        
        ],
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ullam corrupti in voluptatem unde nihil.",
        isFreind: null
    },

    {
        profilePic: "/media/pr4.webp", 
        displayPic: "/media/pexels-dillon-kydd-5794559.webp",
        penddingMessage: 16, 
        location: "Delhi, India", 
        name: "Ella", 
        age: 26, 
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interest: "Music"
            },
            {
                icon: `<i class="text-sm ri-quill-pen-fill"></i>`,
                interest: "writing"
            },
        
        ],
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ullam corrupti in voluptatem unde nihil.",
        isFreind: null
    },

    {
        profilePic: "/media/pr5.webp", 
        displayPic: "/media/pexels-luiz-fernando-2922450.webp",
        penddingMessage: 3, 
        location: "Delhi, india", 
        name: "Nishi", 
        age: 23, 
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interest: "Music"
            },
            {
                icon: `<i class="text-sm ri-quill-pen-fill"></i>`,
                interest: "writing"
            },
        
        ],
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ullam corrupti in voluptatem unde nihil.",
        isFreind: null
    },
    
];

function select(elem) {
    return document.querySelector(elem)
}

let curr = 0;
let isAnimated = false;

function setData(index) {
    select(".prfimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].penddingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;


    var  clutter = "";
    users[index].interests.forEach(function(intr){
        clutter += `<div class="tag flex gap-3 items-center bg-white/30 px-3 py-1 rounded-full">
        ${intr.icon}
        <h3 class="text-sm tracking-tight capitalize" >${intr.interest}</h3>
    </div>`
    });
    select(".tags").innerHTML = clutter;
    
    select(".bio p").textContent = users[index].bio;
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    setData(curr)

    curr = 2
})();

function imageChange() {
    if (!isAnimated) {
        isAnimated = true;
    
    let tl = gsap.timeline({
        onComplete: function(){
            isAnimated = false;
            let main = select(".maincard");
            let income = select(".incomingcard");

            income.classList.remove("z-[3]");
            income.classList.add("z-[4]");
            income.classList.remove("incomingcard");

            main.classList.remove("z-[4]");
            main.classList.add("z-[3]");
            gsap.set(main, {
                scale: 1,
                opacity: 1
            })

            if (curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
            curr++;
            main.classList.remove("maincard");
            income.classList.add("maincard");
            main.classList.add("incomingcard");


        }
    });

    tl.to(".maincard", {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: .9
    }, "a")
    .from(".incomingcard", {
        scale: .9,
        opacity: 0,
        ease: Circ,
        duration: 1.1
    }, "a")
}

};


    let deny = select(".deny")
    let accept = select(".accept")

    deny.addEventListener("click", function(){
        imageChange();
        setData(curr-1);
        gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInOut,
            duration: 1.5
        })
    });

    accept.addEventListener("click", function(){
        imageChange();
        setData(curr-1);
        gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInOut,
            duration: 1.5
        })
    });


(function containerCreater() {
    document.querySelectorAll(".element")
    .forEach(function(element){
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
    })
})();

