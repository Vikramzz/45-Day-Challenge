let loadscript=(src,callback)=>{
  let a = document.createElement("script");
  a.src = src;
  document.body.appendChild(a);
  a.onload = ()=>{
    callback(null,src);
  }
  a.onerror = ()=>{
      console.log("error");
      callback(new Error("src have some error"));
    }
}

let hello = (error,src)=>{
  if(error){
    alert("there was an error");
  }
  else{alert("Script Loaded");
      }
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello);
