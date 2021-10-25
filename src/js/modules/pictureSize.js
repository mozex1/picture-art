const pictureSize = (imgSelector) => {

    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('IMG');

        img.src = img.src.slice(0, -4) + '-1.png';

        blocks.querySelectorAll('P:not(.sizes-hit)').forEach(p => {
            p.style.dispay = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('IMG');

        img.src = img.src.slice(0, -6) + '.png';

        blocks.querySelectorAll('P:not(.sizes-hit)').forEach(p => {
            p.style.dispay = 'block';
        });
    }


    blocks.forEach(block => {
        block.addEventListener('mouseover', ()=> {
            showImg(block);
        });
        block.addEventListener('mouseout', ()=> {
            hideImg(block);
        });
    });



};

export default pictureSize;