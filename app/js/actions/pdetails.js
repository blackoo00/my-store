import shop from '../api/shop';

const proDetailsInitDip = (pdetials) =>({
	type:PRODETAILS_INIT,
	pdetials:pdetials
})

export const proDetailInit = (pid) => dispath =>{
	shop.getProDetails(pdetials => {
		dispath(proDetailsInitDip(pdetials))
	},pid);
}