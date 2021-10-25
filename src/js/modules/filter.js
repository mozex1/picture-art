const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGrandad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    wrapper.style.justifyContent = 'center';
    wrapper.style.marginBottom = '50px';

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
        }
    };

    function setEventBtn(btn, mark = 0) {
        btn.addEventListener('click', () => {
            typeFilter(mark);
        });
    }

    setEventBtn(btnAll, markAll);
    setEventBtn(btnLovers, markLovers);
    setEventBtn(btnGirl, markGirl);
    setEventBtn(btnChef, markChef);
    setEventBtn(btnGuy, markGuy);
    setEventBtn(btnGrandad);
    setEventBtn(btnGrandmother);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

};

export default filter;
