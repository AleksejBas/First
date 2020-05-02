
console.log('Hello, World!!!');
<script>
    let link = document.querySelector('link[rel="import"]');
    let content = link.import.querySelector('#message');
    document.body.appendChild(content.cloneNode(true));
</script> 
