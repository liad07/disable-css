var arr=[]
for (var i = 0; i <document.getElementsByTagName("script").length ; i++) {
    arr[i]=document.getElementsByTagName("style")[i]
}
for (let i = 0; i < arr.length; i++) {
arr[i].remove()
console.log("css disable")
}