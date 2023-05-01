const posts = [{title: 'POST1'}];
const users=[];
function updateLastUserActivityTime(){
        return new Promise((resolve)=>{
            setTimeout(() => {  const date=new Date();
                resolve(date);
            },1000)
        })
}
function createPost(){
    return new Promise((resolve)=>{
        const add={title:'NEW POST'};
        const un={uName:'codder',lastActive:new Date()};
        posts.push(add);
        users.push(un);
        resolve({add,un});
    })
}

Promise.all([createPost(),updateLastUserActivityTime()]).then((value)=>{
    console.log(`before creating ${value[0].add.title}, ${value[0].un.uName} lastActivityTime = ${value[0].un.lastActive}`);
    setTimeout(()=>{console.log(`After creating ${value[0].add.title}>>>`);
    console.log(`${value[0].un.uName} last activity time = ${value[1]}`);},1000) 
})

