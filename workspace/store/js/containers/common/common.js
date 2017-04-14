export const scroll = (cb) =>{
	window.addEventListener('scroll',() => {
		if((document.body.scrollTop + document.body.clientHeight) >= document.body.scrollHeight){
			cb()
		}
	})
}