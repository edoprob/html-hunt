module.exports = (data, tag) => {
    
    let result = data.filter(e => e.tagName == tag);
	return result;
};
