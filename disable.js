var arr=[]
var arr2=[]
for (let j = 0; j <document.getElementsByTagName("style").length ; j++) {
    arr[j]=document.getElementsByTagName("style")[j]

}
for (let i = 0; i <document.getElementsByTagName("link").length ; i++) {
    if(document.getElementsByTagName("link")[i].rel=="stylesheet"){
        arr2[i]=document.getElementsByTagName("link");
    }
}
for (let bx = 1; bx <arr2.length ; bx++) {
    document.getElementsByTagName("link")[bx].remove();
}
for (let i = 0; i < arr.length; i++) {
arr[i].remove()
console.log("css disable")
}
