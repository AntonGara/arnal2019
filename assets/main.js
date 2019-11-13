window.onload = function() {
    var items = document.querySelectorAll('ul li')

    for (var index = 0; index < items.length; index++) {
        var item = items[index];
        
        item.addEventListener('click', function(e) {
            if (e.target === this) {
                var list = this.querySelector('ul')

                if(list) {
                    list.classList.toggle('is-visible')
                } 
            }
        })
    }

    document.addEventListener('click', event => {
        let target = event.path ? event.path[0] : event.target;

        if(target.origin && target.origin !== window.location.origin) {
            target.setAttribute('target', '_blank');
            return;
        }
    })
    
}