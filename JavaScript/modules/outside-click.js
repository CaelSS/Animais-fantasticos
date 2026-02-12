 export default function outsideClick(element, callback) {

    const html = document.documentElement;

    setTimeout(() => {
      html.addEventListener('click', handleOutsideClick);
    });

    function handleOutsideClick(event) {

      if (!element.contains(event.target)) {
        event.preventDefault();
        callback();
      }
      html.removeEventListener('click', handleOutsideClick);

    }

  }